# TaskContainerExecutionInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_id** | **str** |  | [optional] 
**error** | **str** | This is the detailed error string from the Docker service, if available. It is equivalent to the error field returned by \&quot;docker inspect\&quot;. | [optional] 
**state** | **str** | This is the state of the container according to the Docker service. It is equivalent to the status field returned by \&quot;docker inspect\&quot;. | [optional] 

## Example

```python
from openapi_client.models.task_container_execution_information import TaskContainerExecutionInformation

# TODO update the JSON string below
json = "{}"
# create an instance of TaskContainerExecutionInformation from a JSON string
task_container_execution_information_instance = TaskContainerExecutionInformation.from_json(json)
# print the JSON string representation of the object
print(TaskContainerExecutionInformation.to_json())

# convert the object into a dict
task_container_execution_information_dict = task_container_execution_information_instance.to_dict()
# create an instance of TaskContainerExecutionInformation from a dict
task_container_execution_information_from_dict = TaskContainerExecutionInformation.from_dict(task_container_execution_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


