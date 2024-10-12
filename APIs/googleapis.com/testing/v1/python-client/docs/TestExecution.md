# TestExecution

A single test executed in a single environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | [**Environment**](Environment.md) |  | [optional] 
**id** | **str** | Output only. Unique id set by the service. | [optional] 
**matrix_id** | **str** | Output only. Id of the containing TestMatrix. | [optional] 
**project_id** | **str** | Output only. The cloud project that owns the test execution. | [optional] 
**shard** | [**Shard**](Shard.md) |  | [optional] 
**state** | **str** | Output only. Indicates the current progress of the test execution (e.g., FINISHED). | [optional] 
**test_details** | [**TestDetails**](TestDetails.md) |  | [optional] 
**test_specification** | [**TestSpecification**](TestSpecification.md) |  | [optional] 
**timestamp** | **str** | Output only. The time this test execution was initially created. | [optional] 
**tool_results_step** | [**ToolResultsStep**](ToolResultsStep.md) |  | [optional] 

## Example

```python
from openapi_client.models.test_execution import TestExecution

# TODO update the JSON string below
json = "{}"
# create an instance of TestExecution from a JSON string
test_execution_instance = TestExecution.from_json(json)
# print the JSON string representation of the object
print(TestExecution.to_json())

# convert the object into a dict
test_execution_dict = test_execution_instance.to_dict()
# create an instance of TestExecution from a dict
test_execution_from_dict = TestExecution.from_dict(test_execution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


