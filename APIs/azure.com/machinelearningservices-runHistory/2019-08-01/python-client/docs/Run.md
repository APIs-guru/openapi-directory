# Run

The definition of a Run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_uri** | **str** |  | [optional] 
**created_by** | [**CreatedBy**](CreatedBy.md) |  | [optional] 
**created_from** | [**CreatedFrom**](CreatedFrom.md) |  | [optional] 
**created_utc** | **datetime** | The time the run was created in UTC. | [optional] 
**data_container_id** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**diagnostics_uri** | **str** |  | [optional] 
**end_time_utc** | **datetime** | The end time of the run in UTC. | [optional] 
**error** | [**ErrorResponse**](ErrorResponse.md) |  | [optional] 
**experiment_id** | **str** | The Id of the experiment that created this run. | [optional] 
**heartbeat_enabled** | **bool** |  | [optional] 
**hidden** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**options** | [**RunOptions**](RunOptions.md) |  | [optional] 
**parent_run_id** | **str** | The parent of the run if the run is hierarchical; otherwise, Null. | [optional] 
**properties** | **Dict[str, str]** |  | [optional] 
**revision** | **int** |  | [optional] 
**root_run_id** | **str** |  | [optional] 
**run_definition** | **object** |  | [optional] 
**run_id** | **str** | The identifier for the run. Run IDs must be less than 256 characters and contain only alphanumeric characters with dashes and underscores. | [optional] 
**run_number** | **int** |  | [optional] 
**run_type** | **str** |  | [optional] 
**script_name** | **str** |  | [optional] 
**start_time_utc** | **datetime** | The start time of the run in UTC. | [optional] 
**status** | **str** | The status of the run. The Status string value maps to the RunStatus Enum. | [optional] 
**tags** | **Dict[str, str]** |  | [optional] 
**target** | **str** |  | [optional] 
**token** | **str** | A token used for authenticating a run. | [optional] 
**token_expiry_time_utc** | **datetime** | The Token expiration time in UTC. | [optional] 
**user_id** | **str** | The Id of the user that created the run. | [optional] 
**warnings** | [**List[RunDetailsWarning]**](RunDetailsWarning.md) | A list of warnings that occurred during the run. | [optional] 

## Example

```python
from openapi_client.models.run import Run

# TODO update the JSON string below
json = "{}"
# create an instance of Run from a JSON string
run_instance = Run.from_json(json)
# print the JSON string representation of the object
print(Run.to_json())

# convert the object into a dict
run_dict = run_instance.to_dict()
# create an instance of Run from a dict
run_from_dict = Run.from_dict(run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


