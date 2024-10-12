# ConnectionSettingResponseList

The list of bot service connection settings response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of bot service connection setting resources. | [optional] 
**value** | [**List[ConnectionSetting]**](ConnectionSetting.md) | Gets the list of bot service connection settings and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connection_setting_response_list import ConnectionSettingResponseList

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionSettingResponseList from a JSON string
connection_setting_response_list_instance = ConnectionSettingResponseList.from_json(json)
# print the JSON string representation of the object
print(ConnectionSettingResponseList.to_json())

# convert the object into a dict
connection_setting_response_list_dict = connection_setting_response_list_instance.to_dict()
# create an instance of ConnectionSettingResponseList from a dict
connection_setting_response_list_from_dict = ConnectionSettingResponseList.from_dict(connection_setting_response_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


