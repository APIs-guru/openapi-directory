# SourceControlSyncJobStream

Definition of the source control sync job stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource id. | [optional] [readonly] 
**properties** | [**SourceControlSyncJobStreamProperties**](SourceControlSyncJobStreamProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_control_sync_job_stream import SourceControlSyncJobStream

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlSyncJobStream from a JSON string
source_control_sync_job_stream_instance = SourceControlSyncJobStream.from_json(json)
# print the JSON string representation of the object
print(SourceControlSyncJobStream.to_json())

# convert the object into a dict
source_control_sync_job_stream_dict = source_control_sync_job_stream_instance.to_dict()
# create an instance of SourceControlSyncJobStream from a dict
source_control_sync_job_stream_from_dict = SourceControlSyncJobStream.from_dict(source_control_sync_job_stream_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


