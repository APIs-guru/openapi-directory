# ResponseWithContinuationEnvironmentSetting

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[EnvironmentSetting]**](EnvironmentSetting.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_environment_setting import ResponseWithContinuationEnvironmentSetting

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationEnvironmentSetting from a JSON string
response_with_continuation_environment_setting_instance = ResponseWithContinuationEnvironmentSetting.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationEnvironmentSetting.to_json())

# convert the object into a dict
response_with_continuation_environment_setting_dict = response_with_continuation_environment_setting_instance.to_dict()
# create an instance of ResponseWithContinuationEnvironmentSetting from a dict
response_with_continuation_environment_setting_from_dict = ResponseWithContinuationEnvironmentSetting.from_dict(response_with_continuation_environment_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


