# ConnectionSettingProperties

Properties for a Connection Setting Item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client Id associated with the Connection Setting. | [optional] 
**client_secret** | **str** | Client Secret associated with the Connection Setting | [optional] 
**parameters** | [**List[ConnectionSettingParameter]**](ConnectionSettingParameter.md) | Service Provider Parameters associated with the Connection Setting | [optional] 
**scopes** | **str** | Scopes associated with the Connection Setting | [optional] 
**service_provider_display_name** | **str** | Service Provider Display Name associated with the Connection Setting | [optional] 
**service_provider_id** | **str** | Service Provider Id associated with the Connection Setting | [optional] 
**setting_id** | **str** | Setting Id set by the service for the Connection Setting. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connection_setting_properties import ConnectionSettingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionSettingProperties from a JSON string
connection_setting_properties_instance = ConnectionSettingProperties.from_json(json)
# print the JSON string representation of the object
print(ConnectionSettingProperties.to_json())

# convert the object into a dict
connection_setting_properties_dict = connection_setting_properties_instance.to_dict()
# create an instance of ConnectionSettingProperties from a dict
connection_setting_properties_from_dict = ConnectionSettingProperties.from_dict(connection_setting_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


