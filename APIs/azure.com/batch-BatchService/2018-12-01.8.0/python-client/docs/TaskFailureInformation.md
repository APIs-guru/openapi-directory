# TaskFailureInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | [**ErrorCategory**](ErrorCategory.md) |  | 
**code** | **str** |  | [optional] 
**details** | [**List[NameValuePair]**](NameValuePair.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.task_failure_information import TaskFailureInformation

# TODO update the JSON string below
json = "{}"
# create an instance of TaskFailureInformation from a JSON string
task_failure_information_instance = TaskFailureInformation.from_json(json)
# print the JSON string representation of the object
print(TaskFailureInformation.to_json())

# convert the object into a dict
task_failure_information_dict = task_failure_information_instance.to_dict()
# create an instance of TaskFailureInformation from a dict
task_failure_information_from_dict = TaskFailureInformation.from_dict(task_failure_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


