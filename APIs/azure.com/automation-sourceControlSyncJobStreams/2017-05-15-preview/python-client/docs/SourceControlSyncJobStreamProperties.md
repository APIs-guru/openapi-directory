# SourceControlSyncJobStreamProperties

Definition of source control sync job stream properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_control_sync_job_stream_id** | **str** | The sync job stream id. | [optional] 
**stream_type** | **str** | The type of the sync job stream. | [optional] 
**summary** | **str** | The summary of the sync job stream. | [optional] 
**time** | **datetime** | The time of the sync job stream. | [optional] [readonly] 

## Example

```python
from openapi_client.models.source_control_sync_job_stream_properties import SourceControlSyncJobStreamProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlSyncJobStreamProperties from a JSON string
source_control_sync_job_stream_properties_instance = SourceControlSyncJobStreamProperties.from_json(json)
# print the JSON string representation of the object
print(SourceControlSyncJobStreamProperties.to_json())

# convert the object into a dict
source_control_sync_job_stream_properties_dict = source_control_sync_job_stream_properties_instance.to_dict()
# create an instance of SourceControlSyncJobStreamProperties from a dict
source_control_sync_job_stream_properties_from_dict = SourceControlSyncJobStreamProperties.from_dict(source_control_sync_job_stream_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


