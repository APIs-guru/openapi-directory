# CreateRun


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_uri** | **str** |  | [optional] 
**created_from** | [**CreatedFrom**](CreatedFrom.md) |  | [optional] 
**data_container_id** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**diagnostics_uri** | **str** |  | [optional] 
**end_time_utc** | **datetime** | The end time of the run in UTC. | [optional] 
**heartbeat_enabled** | **bool** |  | [optional] 
**hidden** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**options** | [**RunOptions**](RunOptions.md) |  | [optional] 
**parent_run_id** | **str** | The parent of the run if the run is hierarchical; otherwise, Null. | [optional] 
**properties** | **Dict[str, str]** |  | [optional] 
**run_definition** | **object** |  | [optional] 
**run_id** | **str** | The identifier for the run. Run IDs must be less than 256 characters and contain only alphanumeric characters with dashes and underscores. | [optional] 
**run_type** | **str** |  | [optional] 
**script_name** | **str** |  | [optional] 
**start_time_utc** | **datetime** | The start time of the run in UTC. | [optional] 
**status** | **str** | The status of the run. The Status string value maps to the RunStatus Enum. | [optional] 
**tags** | **Dict[str, str]** |  | [optional] 
**target** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.create_run import CreateRun

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRun from a JSON string
create_run_instance = CreateRun.from_json(json)
# print the JSON string representation of the object
print(CreateRun.to_json())

# convert the object into a dict
create_run_dict = create_run_instance.to_dict()
# create an instance of CreateRun from a dict
create_run_from_dict = CreateRun.from_dict(create_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


