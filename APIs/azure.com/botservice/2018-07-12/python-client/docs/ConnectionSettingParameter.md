# ConnectionSettingParameter

Extra Parameter in a Connection Setting Properties to indicate service provider specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key for the Connection Setting Parameter. | [optional] 
**value** | **str** | Value associated with the Connection Setting Parameter. | [optional] 

## Example

```python
from openapi_client.models.connection_setting_parameter import ConnectionSettingParameter

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionSettingParameter from a JSON string
connection_setting_parameter_instance = ConnectionSettingParameter.from_json(json)
# print the JSON string representation of the object
print(ConnectionSettingParameter.to_json())

# convert the object into a dict
connection_setting_parameter_dict = connection_setting_parameter_instance.to_dict()
# create an instance of ConnectionSettingParameter from a dict
connection_setting_parameter_from_dict = ConnectionSettingParameter.from_dict(connection_setting_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


