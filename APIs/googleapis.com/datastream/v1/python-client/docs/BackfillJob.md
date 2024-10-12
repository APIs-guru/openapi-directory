# BackfillJob

Represents a backfill job on a specific stream object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[Error]**](Error.md) | Output only. Errors which caused the backfill job to fail. | [optional] [readonly] 
**last_end_time** | **str** | Output only. Backfill job&#39;s end time. | [optional] [readonly] 
**last_start_time** | **str** | Output only. Backfill job&#39;s start time. | [optional] [readonly] 
**state** | **str** | Output only. Backfill job state. | [optional] [readonly] 
**trigger** | **str** | Backfill job&#39;s triggering reason. | [optional] 

## Example

```python
from openapi_client.models.backfill_job import BackfillJob

# TODO update the JSON string below
json = "{}"
# create an instance of BackfillJob from a JSON string
backfill_job_instance = BackfillJob.from_json(json)
# print the JSON string representation of the object
print(BackfillJob.to_json())

# convert the object into a dict
backfill_job_dict = backfill_job_instance.to_dict()
# create an instance of BackfillJob from a dict
backfill_job_from_dict = BackfillJob.from_dict(backfill_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


