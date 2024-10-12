# ConnectionParameter

connection provider parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **object** |  | [optional] 
**o_auth_settings** | [**ApiOAuthSettings**](ApiOAuthSettings.md) |  | [optional] 
**type** | **str** | Type of the parameter | [optional] 
**ui_definition** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.connection_parameter import ConnectionParameter

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionParameter from a JSON string
connection_parameter_instance = ConnectionParameter.from_json(json)
# print the JSON string representation of the object
print(ConnectionParameter.to_json())

# convert the object into a dict
connection_parameter_dict = connection_parameter_instance.to_dict()
# create an instance of ConnectionParameter from a dict
connection_parameter_from_dict = ConnectionParameter.from_dict(connection_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


