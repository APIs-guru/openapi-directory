# ProcessThreadInfo

Process Thread Information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | ProcessThreadInfo resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.process_thread_info import ProcessThreadInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessThreadInfo from a JSON string
process_thread_info_instance = ProcessThreadInfo.from_json(json)
# print the JSON string representation of the object
print(ProcessThreadInfo.to_json())

# convert the object into a dict
process_thread_info_dict = process_thread_info_instance.to_dict()
# create an instance of ProcessThreadInfo from a dict
process_thread_info_from_dict = ProcessThreadInfo.from_dict(process_thread_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


