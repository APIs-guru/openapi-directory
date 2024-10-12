# ExecutionStatus

ExecutionStatus represents the current state of an Execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancelled_count** | **int** | Optional. The number of tasks which reached phase Cancelled. | [optional] 
**completion_time** | **str** | Optional. Represents the time that the execution was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional | [optional] 
**conditions** | [**List[GoogleCloudRunV1Condition]**](GoogleCloudRunV1Condition.md) | Optional. Conditions communicate information about ongoing/complete reconciliation processes that bring the \&quot;spec\&quot; inline with the observed state of the world. Execution-specific conditions include: * &#x60;ResourcesAvailable&#x60;: &#x60;True&#x60; when underlying resources have been provisioned. * &#x60;Started&#x60;: &#x60;True&#x60; when the execution has started to execute. * &#x60;Completed&#x60;: &#x60;True&#x60; when the execution has succeeded. &#x60;False&#x60; when the execution has failed. | [optional] 
**failed_count** | **int** | Optional. The number of tasks which reached phase Failed. | [optional] 
**log_uri** | **str** | Optional. URI where logs for this execution can be found in Cloud Console. | [optional] 
**observed_generation** | **int** | Optional. The &#39;generation&#39; of the execution that was last processed by the controller. | [optional] 
**retried_count** | **int** | Optional. The number of tasks which have retried at least once. | [optional] 
**running_count** | **int** | Optional. The number of actively running tasks. | [optional] 
**start_time** | **str** | Optional. Represents the time that the execution started to run. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. | [optional] 
**succeeded_count** | **int** | Optional. The number of tasks which reached phase Succeeded. | [optional] 

## Example

```python
from openapi_client.models.execution_status import ExecutionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ExecutionStatus from a JSON string
execution_status_instance = ExecutionStatus.from_json(json)
# print the JSON string representation of the object
print(ExecutionStatus.to_json())

# convert the object into a dict
execution_status_dict = execution_status_instance.to_dict()
# create an instance of ExecutionStatus from a dict
execution_status_from_dict = ExecutionStatus.from_dict(execution_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


