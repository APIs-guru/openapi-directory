# DebugSetting

The debug setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail_level** | **str** | Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information you are passing in during deployment. By logging information about the request or response, you could potentially expose sensitive data that is retrieved through the deployment operations. | [optional] 

## Example

```python
from openapi_client.models.debug_setting import DebugSetting

# TODO update the JSON string below
json = "{}"
# create an instance of DebugSetting from a JSON string
debug_setting_instance = DebugSetting.from_json(json)
# print the JSON string representation of the object
print(DebugSetting.to_json())

# convert the object into a dict
debug_setting_dict = debug_setting_instance.to_dict()
# create an instance of DebugSetting from a dict
debug_setting_from_dict = DebugSetting.from_dict(debug_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


