# Status

Gets or sets the object containing the job status information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cleanup_progress** | **float** | The progress made on the cleanup. | [optional] 
**failure_info** | **str** | The information about any failures that have occurred. | [optional] 
**finish_time** | **int** | The time at which the job completed. It is an integer in milliseconds, as a Unix timestamp relative to 1/1/1970 00:00:00. | [optional] 
**history_file** | **str** | The history file of the job. | [optional] 
**job_acls** | **object** | The object containing the job ACLs. | [optional] 
**job_complete** | **bool** | Whether or not the job has completed. | [optional] 
**job_file** | **str** | The job configuration file. | [optional] 
**job_id** | [**JobID**](JobID.md) |  | [optional] 
**job_id** | **str** | The full ID of the job. | [optional] 
**job_name** | **str** | The user-specified job name. | [optional] 
**job_priority** | **str** | The priority of the job. | [optional] 
**map_progress** | **float** | The progress made on the maps. | [optional] 
**needed_mem** | **int** | The amount of memory needed for the job. | [optional] 
**num_reserved_slots** | **int** | The number of slots reserved. | [optional] 
**num_used_slots** | **int** | The number of slots used for the job. | [optional] 
**priority** | **str** | The priority of the job. | [optional] 
**queue** | **str** | The job queue name. | [optional] 
**reduce_progress** | **float** | The progress made on the reduces. | [optional] 
**reserved_mem** | **int** | The amount of memory reserved for the job. | [optional] 
**retired** | **bool** | Whether or not the job has been retired.  | [optional] 
**run_state** | **int** | The current state of the job. | [optional] 
**scheduling_info** | **str** | The information about the scheduling of the job. | [optional] 
**setup_progress** | **float** | The progress made on the setup. | [optional] 
**start_time** | **int** | The time at which the job started. It is an integer in milliseconds, as a Unix timestamp relative to 1/1/1970 00:00:00. | [optional] 
**state** | **str** | The state of the job. | [optional] 
**tracking_url** | **str** | The link to the web-ui for details of the job. | [optional] 
**uber** | **bool** | Whether job running in uber mode. | [optional] 
**used_mem** | **int** | The amount of memory used by the job. | [optional] 
**username** | **str** | The userid of the person who submitted the job. | [optional] 

## Example

```python
from openapi_client.models.status import Status

# TODO update the JSON string below
json = "{}"
# create an instance of Status from a JSON string
status_instance = Status.from_json(json)
# print the JSON string representation of the object
print(Status.to_json())

# convert the object into a dict
status_dict = status_instance.to_dict()
# create an instance of Status from a dict
status_from_dict = Status.from_dict(status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


