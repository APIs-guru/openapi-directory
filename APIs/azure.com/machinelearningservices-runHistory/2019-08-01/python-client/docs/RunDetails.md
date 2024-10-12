# RunDetails

The details of the run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time_utc** | **datetime** | The end time of the run in UTC. | [optional] 
**error** | [**ErrorResponse**](ErrorResponse.md) |  | [optional] 
**log_files** | **Dict[str, str]** |  | [optional] 
**parent_run_id** | **str** | The parent of the run if the run is hierarchical. | [optional] 
**properties** | **Dict[str, str]** | The properties dictionary for the run. Properties are immutable. | [optional] 
**revision** | **int** |  | [optional] 
**run_definition** | **object** | The run definition specification. | [optional] 
**run_id** | **str** | The identifier for the run. | [optional] 
**start_time_utc** | **datetime** | The start time of the run in UTC. | [optional] 
**status** | **str** | The status of the run. The Status string value maps to the RunStatus Enum. | [optional] 
**tags** | **Dict[str, str]** | The tag dictionary for the run. Tags are mutable. | [optional] 
**target** | **str** | The name of the compute target where the run is executed. | [optional] 
**warnings** | [**List[RunDetailsWarning]**](RunDetailsWarning.md) | A list of warnings that occurred during the run. | [optional] 

## Example

```python
from openapi_client.models.run_details import RunDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RunDetails from a JSON string
run_details_instance = RunDetails.from_json(json)
# print the JSON string representation of the object
print(RunDetails.to_json())

# convert the object into a dict
run_details_dict = run_details_instance.to_dict()
# create an instance of RunDetails from a dict
run_details_from_dict = RunDetails.from_dict(run_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


