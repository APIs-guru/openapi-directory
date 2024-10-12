# Connection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | [**AuthType**](AuthType.md) |  | [optional] 
**authorize_url** | **str** | The OAuth redirect URI. Redirect your users to this URI to let them authorize your app in the connector&#39;s UI. Before you can use this URI, you must add &#x60;redirect_uri&#x60; as a query parameter to the &#x60;authorize_url&#x60;. Be sure to URL encode the &#x60;redirect_uri&#x60; part. Your users will be redirected to this &#x60;redirect_uri&#x60; after they granted access to your app in the connector&#39;s UI. | [optional] [readonly] 
**configurable_resources** | **List[str]** |  | [optional] [readonly] 
**configuration** | [**List[ConnectionConfigurationInner]**](ConnectionConfigurationInner.md) |  | [optional] 
**created_at** | **float** |  | [optional] [readonly] 
**custom_mappings** | [**List[CustomMapping]**](CustomMapping.md) | List of custom mappings configured for this connection | [optional] 
**enabled** | **bool** | Whether the connection is enabled or not. You can enable or disable a connection using the Update Connection API. | [optional] 
**form_fields** | [**List[FormField]**](FormField.md) | The settings that are wanted to create a connection. | [optional] [readonly] 
**has_guide** | **bool** | Whether the connector has a guide available in the developer docs or not (https://docs.apideck.com/connectors/{service_id}/docs/consumer+connection). | [optional] [readonly] 
**icon** | **str** | A visual icon of the connection, that will be shown in the Vault | [optional] [readonly] 
**id** | **str** | The unique identifier of the connection. | [optional] [readonly] 
**integration_state** | [**IntegrationState**](IntegrationState.md) |  | [optional] 
**logo** | **str** | The logo of the connection, that will be shown in the Vault | [optional] [readonly] 
**metadata** | **Dict[str, object]** | Attach your own consumer specific metadata | [optional] 
**name** | **str** | The name of the connection | [optional] [readonly] 
**oauth_grant_type** | [**OAuthGrantType**](OAuthGrantType.md) |  | [optional] 
**resource_schema_support** | **List[str]** |  | [optional] [readonly] 
**resource_settings_support** | **List[str]** |  | [optional] [readonly] 
**revoke_url** | **str** | The OAuth revoke URI. Redirect your users to this URI to revoke this connection. Before you can use this URI, you must add &#x60;redirect_uri&#x60; as a query parameter. Your users will be redirected to this &#x60;redirect_uri&#x60; after they granted access to your app in the connector&#39;s UI. | [optional] [readonly] 
**schema_support** | **bool** |  | [optional] [readonly] 
**service_id** | **str** | The ID of the service this connection belongs to. | [optional] [readonly] 
**settings** | **Dict[str, object]** | Connection settings. Values will persist to &#x60;form_fields&#x60; with corresponding id | [optional] 
**settings_required_for_authorization** | **List[str]** | List of settings that are required to be configured on integration before authorization can occur | [optional] [readonly] 
**state** | [**ConnectionState**](ConnectionState.md) |  | [optional] 
**status** | **str** | Status of the connection. | [optional] [readonly] 
**subscriptions** | [**List[WebhookSubscription]**](WebhookSubscription.md) |  | [optional] [readonly] 
**tag_line** | **str** |  | [optional] [readonly] 
**unified_api** | **str** | The unified API category where the connection belongs to. | [optional] [readonly] 
**updated_at** | **float** |  | [optional] [readonly] 
**validation_support** | **bool** |  | [optional] [readonly] 
**website** | **str** | The website URL of the connection | [optional] [readonly] 

## Example

```python
from openapi_client.models.connection import Connection

# TODO update the JSON string below
json = "{}"
# create an instance of Connection from a JSON string
connection_instance = Connection.from_json(json)
# print the JSON string representation of the object
print(Connection.to_json())

# convert the object into a dict
connection_dict = connection_instance.to_dict()
# create an instance of Connection from a dict
connection_from_dict = Connection.from_dict(connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


