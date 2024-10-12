# StageExecutionDetails

Information about the workers and work items within a stage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If present, this response does not contain all requested tasks. To obtain the next page of results, repeat the request with page_token set to this value. | [optional] 
**workers** | [**List[WorkerDetails]**](WorkerDetails.md) | Workers that have done work on the stage. | [optional] 

## Example

```python
from openapi_client.models.stage_execution_details import StageExecutionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of StageExecutionDetails from a JSON string
stage_execution_details_instance = StageExecutionDetails.from_json(json)
# print the JSON string representation of the object
print(StageExecutionDetails.to_json())

# convert the object into a dict
stage_execution_details_dict = stage_execution_details_instance.to_dict()
# create an instance of StageExecutionDetails from a dict
stage_execution_details_from_dict = StageExecutionDetails.from_dict(stage_execution_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


