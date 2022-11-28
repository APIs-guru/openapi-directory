# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateConnectorProfileRequest(
    headers=operations.CreateConnectorProfileHeaders(
        x_amz_algorithm="laboriosam",
        x_amz_content_sha256="velit",
        x_amz_credential="ea",
        x_amz_date="tempore",
        x_amz_security_token="fugit",
        x_amz_signature="aut",
        x_amz_signed_headers="tempora",
    ),
    request=operations.CreateConnectorProfileRequestBody(
        connection_mode="Public",
        connector_profile_config=operations.CreateConnectorProfileRequestBodyConnectorProfileConfig(
            connector_profile_credentials=shared.ConnectorProfileCredentials(
                amplitude=shared.AmplitudeConnectorProfileCredentials(
                    api_key="mollitia",
                    secret_key="non",
                ),
                datadog=shared.DatadogConnectorProfileCredentials(
                    api_key="magni",
                    application_key="recusandae",
                ),
                dynatrace=shared.DynatraceConnectorProfileCredentials(
                    api_token="illum",
                ),
                google_analytics=shared.GoogleAnalyticsConnectorProfileCredentials(
                    access_token="consequatur",
                    client_id="dolores",
                    client_secret="hic",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="nihil",
                        redirect_uri="explicabo",
                    ),
                    refresh_token="ex",
                ),
                honeycode=shared.HoneycodeConnectorProfileCredentials(
                    access_token="iure",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="et",
                        redirect_uri="quos",
                    ),
                    refresh_token="et",
                ),
                infor_nexus=shared.InforNexusConnectorProfileCredentials(
                    access_key_id="explicabo",
                    datakey="necessitatibus",
                    secret_access_key="veniam",
                    user_id="qui",
                ),
                marketo=shared.MarketoConnectorProfileCredentials(
                    access_token="in",
                    client_id="odit",
                    client_secret="molestias",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="corporis",
                        redirect_uri="tenetur",
                    ),
                ),
                redshift=shared.RedshiftConnectorProfileCredentials(
                    password="esse",
                    username="similique",
                ),
                sapo_data=shared.SapoDataConnectorProfileCredentials(
                    basic_auth_credentials=shared.BasicAuthCredentials(
                        password="mollitia",
                        username="id",
                    ),
                    o_auth_credentials=shared.OAuthCredentials(
                        access_token="laboriosam",
                        client_id="quam",
                        client_secret="maiores",
                        o_auth_request=shared.ConnectorOAuthRequest(
                            auth_code="totam",
                            redirect_uri="iusto",
                        ),
                        refresh_token="aperiam",
                    ),
                ),
                salesforce=shared.SalesforceConnectorProfileCredentials(
                    access_token="repellendus",
                    client_credentials_arn="sunt",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="eum",
                        redirect_uri="earum",
                    ),
                    refresh_token="et",
                ),
                service_now=shared.ServiceNowConnectorProfileCredentials(
                    password="officia",
                    username="aut",
                ),
                singular=shared.SingularConnectorProfileCredentials(
                    api_key="dolor",
                ),
                slack=shared.SlackConnectorProfileCredentials(
                    access_token="quia",
                    client_id="quaerat",
                    client_secret="ea",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="et",
                        redirect_uri="expedita",
                    ),
                ),
                snowflake=shared.SnowflakeConnectorProfileCredentials(
                    password="recusandae",
                    username="qui",
                ),
                trendmicro=shared.TrendmicroConnectorProfileCredentials(
                    api_secret_key="qui",
                ),
                veeva=shared.VeevaConnectorProfileCredentials(
                    password="aut",
                    username="explicabo",
                ),
                zendesk=shared.ZendeskConnectorProfileCredentials(
                    access_token="cupiditate",
                    client_id="temporibus",
                    client_secret="saepe",
                    o_auth_request=shared.ConnectorOAuthRequest(
                        auth_code="sed",
                        redirect_uri="voluptatem",
                    ),
                ),
            ),
            connector_profile_properties=shared.ConnectorProfileProperties(
                amplitude={
                    "fugiat": "nesciunt",
                    "et": "qui",
                },
                datadog=shared.DatadogConnectorProfileProperties(
                    instance_url="quis",
                ),
                dynatrace=shared.DynatraceConnectorProfileProperties(
                    instance_url="eligendi",
                ),
                google_analytics={
                    "fuga": "aliquid",
                },
                honeycode={
                    "aut": "et",
                    "voluptatem": "sunt",
                },
                infor_nexus=shared.InforNexusConnectorProfileProperties(
                    instance_url="quae",
                ),
                marketo=shared.MarketoConnectorProfileProperties(
                    instance_url="placeat",
                ),
                redshift=shared.RedshiftConnectorProfileProperties(
                    bucket_name="vitae",
                    bucket_prefix="rerum",
                    database_url="officiis",
                    role_arn="commodi",
                ),
                sapo_data=shared.SapoDataConnectorProfileProperties(
                    application_host_url="sed",
                    application_service_path="voluptates",
                    client_number="enim",
                    logon_language="eos",
                    o_auth_properties=shared.OAuthProperties(
                        auth_code_url="ipsa",
                        o_auth_scopes=[
                            "sint",
                        ],
                        token_url="aut",
                    ),
                    port_number=8912790974007895797,
                    private_link_service_name="facilis",
                ),
                salesforce=shared.SalesforceConnectorProfileProperties(
                    instance_url="et",
                    is_sandbox_environment=False,
                ),
                service_now=shared.ServiceNowConnectorProfileProperties(
                    instance_url="et",
                ),
                singular={
                    "sit": "voluptate",
                },
                slack=shared.SlackConnectorProfileProperties(
                    instance_url="eaque",
                ),
                snowflake=shared.SnowflakeConnectorProfileProperties(
                    account_name="consequuntur",
                    bucket_name="et",
                    bucket_prefix="amet",
                    private_link_service_name="distinctio",
                    region="in",
                    stage="consectetur",
                    warehouse="minima",
                ),
                trendmicro={
                    "et": "consequatur",
                    "eum": "sunt",
                },
                veeva=shared.VeevaConnectorProfileProperties(
                    instance_url="cupiditate",
                ),
                zendesk=shared.ZendeskConnectorProfileProperties(
                    instance_url="quam",
                ),
            ),
        ),
        connector_profile_name="repellendus",
        connector_type="Trendmicro",
        kms_arn="nihil",
    ),
)
    
res = s.sdk.create_connector_profile(req)

if res.create_connector_profile_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_connector_profile` -  Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. 
* `create_flow` -  Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 
* `delete_connector_profile` -  Enables you to delete an existing connector profile. 
* `delete_flow` -  Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 
* `describe_connector_entity` -  Provides details regarding the entity used with the connector, with a description of the data model for each entity. 
* `describe_connector_profiles` - <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
* `describe_connectors` -  Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 
* `describe_flow` -  Provides a description of the specified flow. 
* `describe_flow_execution_records` -  Fetches the execution history of the flow. 
* `list_connector_entities` -  Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 
* `list_flows` -  Lists all of the flows associated with your account. 
* `list_tags_for_resource` -  Retrieves the tags that are associated with a specified flow. 
* `start_flow` -  Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 
* `stop_flow` -  Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 
* `tag_resource` -  Applies a tag to the specified flow. 
* `untag_resource` -  Removes a tag from the specified flow. 
* `update_connector_profile` -  Updates a given connector profile associated with your account. 
* `update_flow` -  Updates an existing flow. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
