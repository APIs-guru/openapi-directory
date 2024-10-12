# BackgroundJobLogEntry

Execution log of a background job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_job_details** | [**ApplyJobDetails**](ApplyJobDetails.md) |  | [optional] 
**completion_comment** | **str** | Output only. Job completion comment, such as how many entities were seeded, how many warnings were found during conversion, and similar information. | [optional] [readonly] 
**completion_state** | **str** | Output only. Job completion state, i.e. the final state after the job completed. | [optional] [readonly] 
**convert_job_details** | [**ConvertJobDetails**](ConvertJobDetails.md) |  | [optional] 
**finish_time** | **str** | The timestamp when the background job was finished. | [optional] 
**id** | **str** | The background job log entry ID. | [optional] 
**import_rules_job_details** | [**ImportRulesJobDetails**](ImportRulesJobDetails.md) |  | [optional] 
**job_type** | **str** | The type of job that was executed. | [optional] 
**request_autocommit** | **bool** | Output only. Whether the client requested the conversion workspace to be committed after a successful completion of the job. | [optional] [readonly] 
**seed_job_details** | [**SeedJobDetails**](SeedJobDetails.md) |  | [optional] 
**start_time** | **str** | The timestamp when the background job was started. | [optional] 

## Example

```python
from openapi_client.models.background_job_log_entry import BackgroundJobLogEntry

# TODO update the JSON string below
json = "{}"
# create an instance of BackgroundJobLogEntry from a JSON string
background_job_log_entry_instance = BackgroundJobLogEntry.from_json(json)
# print the JSON string representation of the object
print(BackgroundJobLogEntry.to_json())

# convert the object into a dict
background_job_log_entry_dict = background_job_log_entry_instance.to_dict()
# create an instance of BackgroundJobLogEntry from a dict
background_job_log_entry_from_dict = BackgroundJobLogEntry.from_dict(background_job_log_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


