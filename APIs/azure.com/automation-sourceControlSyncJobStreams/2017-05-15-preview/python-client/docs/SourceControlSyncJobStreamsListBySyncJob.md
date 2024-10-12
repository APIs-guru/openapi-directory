# SourceControlSyncJobStreamsListBySyncJob

The response model for the list source control sync job streams operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The next link. | [optional] [readonly] 
**value** | [**List[SourceControlSyncJobStream]**](SourceControlSyncJobStream.md) | The list of source control sync job streams. | [optional] 

## Example

```python
from openapi_client.models.source_control_sync_job_streams_list_by_sync_job import SourceControlSyncJobStreamsListBySyncJob

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlSyncJobStreamsListBySyncJob from a JSON string
source_control_sync_job_streams_list_by_sync_job_instance = SourceControlSyncJobStreamsListBySyncJob.from_json(json)
# print the JSON string representation of the object
print(SourceControlSyncJobStreamsListBySyncJob.to_json())

# convert the object into a dict
source_control_sync_job_streams_list_by_sync_job_dict = source_control_sync_job_streams_list_by_sync_job_instance.to_dict()
# create an instance of SourceControlSyncJobStreamsListBySyncJob from a dict
source_control_sync_job_streams_list_by_sync_job_from_dict = SourceControlSyncJobStreamsListBySyncJob.from_dict(source_control_sync_job_streams_list_by_sync_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


