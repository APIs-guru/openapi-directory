# SourceControlSyncJobStreamByIdProperties

Definition of source control sync job stream by id properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_control_sync_job_stream_id** | **str** | The sync job stream id. | [optional] 
**stream_text** | **str** | The text of the sync job stream. | [optional] 
**stream_type** | **str** | The type of the sync job stream. | [optional] 
**summary** | **str** | The summary of the sync job stream. | [optional] 
**time** | **datetime** | The time of the sync job stream. | [optional] [readonly] 
**value** | **Dict[str, object]** | The values of the job stream. | [optional] 

## Example

```python
from openapi_client.models.source_control_sync_job_stream_by_id_properties import SourceControlSyncJobStreamByIdProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlSyncJobStreamByIdProperties from a JSON string
source_control_sync_job_stream_by_id_properties_instance = SourceControlSyncJobStreamByIdProperties.from_json(json)
# print the JSON string representation of the object
print(SourceControlSyncJobStreamByIdProperties.to_json())

# convert the object into a dict
source_control_sync_job_stream_by_id_properties_dict = source_control_sync_job_stream_by_id_properties_instance.to_dict()
# create an instance of SourceControlSyncJobStreamByIdProperties from a dict
source_control_sync_job_stream_by_id_properties_from_dict = SourceControlSyncJobStreamByIdProperties.from_dict(source_control_sync_job_stream_by_id_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


