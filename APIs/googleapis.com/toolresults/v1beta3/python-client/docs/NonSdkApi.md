# NonSdkApi

A non-sdk API and examples of it being called along with other metadata See https://developer.android.com/distribute/best-practices/develop/restrictions-non-sdk-interfaces

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_signature** | **str** | The signature of the Non-SDK API | [optional] 
**example_stack_traces** | **List[str]** | Example stack traces of this API being called. | [optional] 
**insights** | [**List[NonSdkApiInsight]**](NonSdkApiInsight.md) | Optional debugging insights for non-SDK API violations. | [optional] 
**invocation_count** | **int** | The total number of times this API was observed to have been called. | [optional] 
**list** | **str** | Which list this API appears on | [optional] 

## Example

```python
from openapi_client.models.non_sdk_api import NonSdkApi

# TODO update the JSON string below
json = "{}"
# create an instance of NonSdkApi from a JSON string
non_sdk_api_instance = NonSdkApi.from_json(json)
# print the JSON string representation of the object
print(NonSdkApi.to_json())

# convert the object into a dict
non_sdk_api_dict = non_sdk_api_instance.to_dict()
# create an instance of NonSdkApi from a dict
non_sdk_api_from_dict = NonSdkApi.from_dict(non_sdk_api_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


