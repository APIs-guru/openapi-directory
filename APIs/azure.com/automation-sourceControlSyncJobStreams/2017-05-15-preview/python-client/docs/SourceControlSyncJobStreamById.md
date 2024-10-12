# SourceControlSyncJobStreamById

Definition of the source control sync job stream by id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource id. | [optional] [readonly] 
**properties** | [**SourceControlSyncJobStreamByIdProperties**](SourceControlSyncJobStreamByIdProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_control_sync_job_stream_by_id import SourceControlSyncJobStreamById

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlSyncJobStreamById from a JSON string
source_control_sync_job_stream_by_id_instance = SourceControlSyncJobStreamById.from_json(json)
# print the JSON string representation of the object
print(SourceControlSyncJobStreamById.to_json())

# convert the object into a dict
source_control_sync_job_stream_by_id_dict = source_control_sync_job_stream_by_id_instance.to_dict()
# create an instance of SourceControlSyncJobStreamById from a dict
source_control_sync_job_stream_by_id_from_dict = SourceControlSyncJobStreamById.from_dict(source_control_sync_job_stream_by_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


