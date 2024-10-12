# coding: utf-8

# flake8: noqa
"""
    Vault API

    Welcome to the Vault API 👋  When you're looking to connect to an API, the first step is authentication.  Vault helps you handle OAuth flows, store API keys, and refresh access tokens from users (called consumers in Apideck).  ## Base URL  The base URL for all API requests is `https://unify.apideck.com`  ## Get Started  To use the Apideck APIs, you need to sign up for free at [https://app.apideck.com/signup](). Follow the steps below to get started.  - [Create a free account.](https://app.apideck.com/signup) - Go to the [Dashboard](https://app.apideck.com/unify/unified-apis/dashboard). - Get your API key and the application ID. - Select and configure the integrations you want to make available to your users. Through the Unify dashboard, you can configure which connectors you want to support as integrations. - Retrieve the client_id and client_secret for the integration you want to activate (Only needed for OAuth integrations). - Soon, you can skip the previous step and use the Apideck sandbox credentials to get you started instead (upcoming) - Register the redirect URI for the example app (https://unify.apideck.com/vault/callback) in the list of redirect URIs under your app's settings - Use the [publishing guides](/app-listing-requirements) to get your integration listed across app marketplaces.  ### Hosted Vault  Hosted Vault (vault.apideck.com) is a no-code solution, so you don't need to build your own UI to handle the integration settings and authentication.  ![Hosted Vault - Integrations portal](https://github.com/apideck-samples/integration-settings/raw/master/public/img/vault.png)  Behind the scenes, Hosted Vault implements the Vault API endpoints and handles the following features for your customers:  - Add a connection - Handle the OAuth flow - Configure connection settings per integration - Manage connections - Discover and propose integration options - Search for integrations (upcoming) - Give integration suggestions based on provided metadata (email or website) when creating the session (upcoming)  To use Hosted Vault, you will need to first [**create a session**](https://developers.apideck.com/apis/vault/reference#operation/sessionsCreate). This can be achieved by making a POST request to the Vault API to create a valid session for a user, hereafter referred to as the consumer ID.  Example using curl:  ``` curl -X POST https://unify.apideck.com/vault/sessions     -H \"Content-Type: application/json\"     -H \"Authorization: Bearer <your-api-key>\"     -H \"X-APIDECK-CONSUMER-ID: <consumer-id>\"     -H \"X-APIDECK-APP-ID: <application-id>\"     -d '{\"consumer_metadata\": { \"account_name\" : \"Sample\", \"user_name\": \"Sand Box\", \"email\": \"sand@box.com\", \"image\": \"https://unavatar.now.sh/jake\" }, \"theme\": { \"vault_name\": \"Intercom\", \"primary_color\": \"#286efa\", \"sidepanel_background_color\": \"#286efa\",\"sidepanel_text_color\": \"#FFFFFF\", \"favicon\": \"https://res.cloudinary.com/apideck/icons/intercom\" }}' ```  ### Vault API  _Beware, this is strategy takes more time to implement in comparison to Hosted Vault._  If you are building your integration settings UI manually, you can call the Vault API directly.  The Vault API is for those who want to completely white label the in-app integrations overview and authentication experience. All the available endpoints are listed below.  Through the API, your customers authenticate directly in your app, where Vault will still take care of redirecting to the auth provider and back to your app.  If you're already storing access tokens, we will help you migrate through our Vault Migration API (upcoming).  ## Domain model  At its core, a domain model creates a web of interconnected entities.  Our domain model contains five main entity types: Consumer (user, account, team, machine), Application, Connector, Integration, and Connection.  ## Connection state  The connection state is computed based on the connection flow below.  ![](https://developers.apideck.com/api-references/vault/connection-flow.png)  More information about the connection state can be found in the [Connection state](https://developers.apideck.com/guides/connection-states) guide.  ## Unify and Proxy integration  The only thing you need to use the Unify APIs and Proxy is the consumer id; thereafter, Vault will do the look-up in the background to handle the token injection before performing the API call(s).  ## Headers  Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230) states header names are case insensitive.  | Name                  | Type    | Required | Description | | --------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | | x-apideck-app-id      | String  | Yes      | The id of your Unify application. Available at https://app.apideck.com/api-keys. | | x-apideck-consumer-id | String  | Yes      | The id of the customer stored inside Apideck Vault. This can be a user id, account id, device id or whatever entity that can have integration within your app. | | x-apideck-raw         | Boolean | No       | Include raw response. Mostly used for debugging purposes. |  ## Guides  - [Get started with Apideck](https://developers.apideck.com/getting-started) - [Get started with Vault](https://developers.apideck.com/guides/vault) - [Authorize connection via Vault](https://developers.apideck.com/guides/authorize-connections) - [Vault connection status](https://developers.apideck.com/guides/connection-states) - [How to build an integrations UI with Vault](https://github.com/apideck-samples/integration-settings)   ## FAQ  **What purpose does Vault serve? Can I just handle the authentication and access token myself?** You can store everything yourself, but that defeats the purpose of using Apideck Unify. Handling tokens for multiple providers can quickly become very complex.  ### Is my data secure?  Vault employs data minimization, therefore only requesting the minimum amount of scopes needed to perform an API request.  ### How do I migrate existing data?  Using our migration API, you can migrate the access tokens and accounts to Apideck Vault.  ### Can I use Vault in combination with existing integrations?  Yes, you can. The flexibility of Unify allows you to quickly the use cases you need while keeping a gradual migration path based on your timeline and requirements.  ### How does Vault work for Apideck Ecosystem customers?  Once logged in, pick your ecosystem; on the left-hand side of the screen, you'll have the option to create an application underneath the Unify section.  ### How to integrate Apideck Vault  This section covers everything you need to know to authenticate your customers through Vault. Vault provides **three auth strategies** to use API tokens from your customers:  - Vault API - Hosted Vault - Vault Widget (JS, React, Vue)  You can also opt to bypass Vault and still take care of authentication flows yourself. Make sure to put the right safeguards in place to protect your customers' tokens and other sensitive data.  ### What auth types does Vault support?  We support all the common authentication types, including: API keys, OAuth, Basic auth, and more.  #### API keys  For Services supporting the API key strategy, you can use Hosted Vault will need to provide an in-app form where users can configure their API keys provided by the integration service.  #### OAuth 2.0  ##### Authorization Code Grant Type Flow  Vault handles the complete Authorization Code Grant Type Flow for you. This flow only supports browser-based (passive) authentication because most identity providers don't allow entering a username and password to be entered into applications that they don't own.  Certain connectors require an OAuth redirect authentication flow, where the end-user is redirected to the provider's website or mobile app to authenticate.  This is being handled by the `/authorize` endpoint.  #### Basic auth  Basic authentication is a simple authentication scheme built into the HTTP protocol. The required fields to complete basic auth are handled by Hosted Vault or by updating the connection through the Vault API below.  

    The version of the OpenAPI document: 10.0.0
    Contact: hello@apideck.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


# import models into model package
from openapi_client.models.auth_type import AuthType
from openapi_client.models.bad_request_response import BadRequestResponse
from openapi_client.models.bad_request_response_detail import BadRequestResponseDetail
from openapi_client.models.connection import Connection
from openapi_client.models.connection_configuration_inner import ConnectionConfigurationInner
from openapi_client.models.connection_configuration_inner_defaults_inner import ConnectionConfigurationInnerDefaultsInner
from openapi_client.models.connection_configuration_inner_defaults_inner_value import ConnectionConfigurationInnerDefaultsInnerValue
from openapi_client.models.connection_configuration_inner_defaults_inner_value_any_of_inner import ConnectionConfigurationInnerDefaultsInnerValueAnyOfInner
from openapi_client.models.connection_event import ConnectionEvent
from openapi_client.models.connection_import_data import ConnectionImportData
from openapi_client.models.connection_import_data_credentials import ConnectionImportDataCredentials
from openapi_client.models.connection_metadata import ConnectionMetadata
from openapi_client.models.connection_state import ConnectionState
from openapi_client.models.connection_webhook import ConnectionWebhook
from openapi_client.models.consumer import Consumer
from openapi_client.models.consumer_connection import ConsumerConnection
from openapi_client.models.consumer_metadata import ConsumerMetadata
from openapi_client.models.consumer_request_counts_in_date_range_response import ConsumerRequestCountsInDateRangeResponse
from openapi_client.models.consumer_request_counts_in_date_range_response_data import ConsumerRequestCountsInDateRangeResponseData
from openapi_client.models.create_connection_response import CreateConnectionResponse
from openapi_client.models.create_consumer_response import CreateConsumerResponse
from openapi_client.models.create_custom_mapping_request import CreateCustomMappingRequest
from openapi_client.models.create_custom_mapping_response import CreateCustomMappingResponse
from openapi_client.models.create_session_response import CreateSessionResponse
from openapi_client.models.create_session_response_data import CreateSessionResponseData
from openapi_client.models.custom_field_finder import CustomFieldFinder
from openapi_client.models.custom_mapping import CustomMapping
from openapi_client.models.delete_consumer_response import DeleteConsumerResponse
from openapi_client.models.delete_consumer_response_data import DeleteConsumerResponseData
from openapi_client.models.form_field import FormField
from openapi_client.models.form_field_option import FormFieldOption
from openapi_client.models.form_field_option_group import FormFieldOptionGroup
from openapi_client.models.get_connection_response import GetConnectionResponse
from openapi_client.models.get_connections_response import GetConnectionsResponse
from openapi_client.models.get_consumer_response import GetConsumerResponse
from openapi_client.models.get_consumers_response import GetConsumersResponse
from openapi_client.models.get_consumers_response_data_inner import GetConsumersResponseDataInner
from openapi_client.models.get_custom_fields_response import GetCustomFieldsResponse
from openapi_client.models.get_custom_mapping_response import GetCustomMappingResponse
from openapi_client.models.get_logs_response import GetLogsResponse
from openapi_client.models.get_resource_example_response import GetResourceExampleResponse
from openapi_client.models.get_resource_schema_response import GetResourceSchemaResponse
from openapi_client.models.integration_state import IntegrationState
from openapi_client.models.linked_connector_resource import LinkedConnectorResource
from openapi_client.models.links import Links
from openapi_client.models.log import Log
from openapi_client.models.log_operation import LogOperation
from openapi_client.models.log_service import LogService
from openapi_client.models.logs_filter import LogsFilter
from openapi_client.models.meta import Meta
from openapi_client.models.meta_cursors import MetaCursors
from openapi_client.models.not_found_response import NotFoundResponse
from openapi_client.models.not_found_response_detail import NotFoundResponseDetail
from openapi_client.models.not_implemented_response import NotImplementedResponse
from openapi_client.models.not_implemented_response_detail import NotImplementedResponseDetail
from openapi_client.models.o_auth_grant_type import OAuthGrantType
from openapi_client.models.payment_required_response import PaymentRequiredResponse
from openapi_client.models.request_count_allocation import RequestCountAllocation
from openapi_client.models.resource_example import ResourceExample
from openapi_client.models.resource_status import ResourceStatus
from openapi_client.models.session import Session
from openapi_client.models.session_settings import SessionSettings
from openapi_client.models.session_theme import SessionTheme
from openapi_client.models.simple_form_field_option import SimpleFormFieldOption
from openapi_client.models.simple_form_field_option_value import SimpleFormFieldOptionValue
from openapi_client.models.simple_form_field_option_value_any_of_inner import SimpleFormFieldOptionValueAnyOfInner
from openapi_client.models.unauthorized_response import UnauthorizedResponse
from openapi_client.models.unexpected_error_response import UnexpectedErrorResponse
from openapi_client.models.unexpected_error_response_detail import UnexpectedErrorResponseDetail
from openapi_client.models.unified_api_id import UnifiedApiId
from openapi_client.models.unprocessable_response import UnprocessableResponse
from openapi_client.models.update_connection_response import UpdateConnectionResponse
from openapi_client.models.update_consumer_request import UpdateConsumerRequest
from openapi_client.models.update_consumer_response import UpdateConsumerResponse
from openapi_client.models.update_custom_mapping_request import UpdateCustomMappingRequest
from openapi_client.models.update_custom_mapping_response import UpdateCustomMappingResponse
from openapi_client.models.vault_event_type import VaultEventType
from openapi_client.models.webhook_subscription import WebhookSubscription
