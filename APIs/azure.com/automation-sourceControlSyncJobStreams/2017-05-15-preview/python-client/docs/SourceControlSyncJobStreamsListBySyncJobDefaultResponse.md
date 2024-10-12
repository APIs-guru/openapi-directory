# SourceControlSyncJobStreamsListBySyncJobDefaultResponse

Error response of an operation failure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.source_control_sync_job_streams_list_by_sync_job_default_response import SourceControlSyncJobStreamsListBySyncJobDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlSyncJobStreamsListBySyncJobDefaultResponse from a JSON string
source_control_sync_job_streams_list_by_sync_job_default_response_instance = SourceControlSyncJobStreamsListBySyncJobDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(SourceControlSyncJobStreamsListBySyncJobDefaultResponse.to_json())

# convert the object into a dict
source_control_sync_job_streams_list_by_sync_job_default_response_dict = source_control_sync_job_streams_list_by_sync_job_default_response_instance.to_dict()
# create an instance of SourceControlSyncJobStreamsListBySyncJobDefaultResponse from a dict
source_control_sync_job_streams_list_by_sync_job_default_response_from_dict = SourceControlSyncJobStreamsListBySyncJobDefaultResponse.from_dict(source_control_sync_job_streams_list_by_sync_job_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


