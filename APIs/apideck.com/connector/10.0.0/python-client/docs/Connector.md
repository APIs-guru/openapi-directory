# Connector


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_only** | **bool** | Indicates whether a connector only supports authentication. In this case the connector is not mapped to a Unified API, but can be used with the Proxy API | [optional] [readonly] 
**auth_type** | **str** | Type of authorization used by the connector | [optional] [readonly] 
**blind_mapped** | **bool** | Set to &#x60;true&#x60; when connector was implemented from downstream docs only and without API access. This state indicates that integration will require Apideck support, and access to downstream API to validate mapping quality. | [optional] [readonly] 
**configurable_resources** | **List[str]** | List of resources that have settings that can be configured. | [optional] 
**custom_scopes** | **bool** | Set to &#x60;true&#x60; when connector allows the definition of custom scopes. | [optional] [readonly] 
**description** | **str** | A description of the object. | [optional] 
**docs** | [**List[ConnectorDoc]**](ConnectorDoc.md) |  | [optional] 
**free_trial_available** | **bool** | Set to &#x60;true&#x60; when the connector offers a free trial. Use &#x60;signup_url&#x60; to sign up for a free trial | [optional] 
**has_sandbox_credentials** | **bool** | Indicates whether Apideck Sandbox OAuth credentials are available. | [optional] 
**icon_url** | **str** | Link to a small square icon for the connector. | [optional] 
**id** | **str** | ID of the connector. | [optional] [readonly] 
**logo_url** | **str** | Link to the full logo for the connector. | [optional] 
**name** | **str** | Name of the connector. | [optional] 
**oauth_credentials_source** | **str** | Location of the OAuth client credentials. For most connectors the OAuth client credentials are stored on integration and managed by the application owner. For others they are stored on connection and managed by the consumer in Vault. | [optional] [readonly] 
**oauth_grant_type** | **str** | OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types | [optional] [readonly] 
**oauth_scopes** | [**List[ConnectorOauthScopesInner]**](ConnectorOauthScopesInner.md) | List of OAuth Scopes available for this connector. | [optional] 
**partner_signup_url** | **str** | Link to the connector&#39;s partner program signup page. | [optional] 
**schema_support** | [**SchemaSupport**](SchemaSupport.md) |  | [optional] 
**service_id** | **str** | Service provider identifier | [optional] 
**settings** | [**List[ConnectorSetting]**](ConnectorSetting.md) |  | [optional] 
**signup_url** | **str** | Link to the connector&#39;s signup page. | [optional] 
**status** | [**ConnectorStatus**](ConnectorStatus.md) |  | [optional] 
**supported_events** | [**List[ConnectorEvent]**](ConnectorEvent.md) | List of events that are supported on the connector across all Unified APIs. | [optional] 
**supported_resources** | [**List[LinkedConnectorResource]**](LinkedConnectorResource.md) | List of resources that are supported on the connector. | [optional] 
**tls_support** | [**ConnectorTlsSupport**](ConnectorTlsSupport.md) |  | [optional] 
**unified_apis** | [**List[ConnectorUnifiedApisInner]**](ConnectorUnifiedApisInner.md) | List of Unified APIs that feature this connector. | [optional] 
**webhook_support** | [**WebhookSupport**](WebhookSupport.md) |  | [optional] 
**website_url** | **str** | Link to the connector&#39;s website. | [optional] 

## Example

```python
from openapi_client.models.connector import Connector

# TODO update the JSON string below
json = "{}"
# create an instance of Connector from a JSON string
connector_instance = Connector.from_json(json)
# print the JSON string representation of the object
print(Connector.to_json())

# convert the object into a dict
connector_dict = connector_instance.to_dict()
# create an instance of Connector from a dict
connector_from_dict = Connector.from_dict(connector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


