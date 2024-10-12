# SourceControlSyncJobCreateProperties

Definition of create source control sync job properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commit_id** | **str** | The commit id of the source control sync job. If not syncing to a commitId, enter an empty string. | 

## Example

```python
from openapi_client.models.source_control_sync_job_create_properties import SourceControlSyncJobCreateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlSyncJobCreateProperties from a JSON string
source_control_sync_job_create_properties_instance = SourceControlSyncJobCreateProperties.from_json(json)
# print the JSON string representation of the object
print(SourceControlSyncJobCreateProperties.to_json())

# convert the object into a dict
source_control_sync_job_create_properties_dict = source_control_sync_job_create_properties_instance.to_dict()
# create an instance of SourceControlSyncJobCreateProperties from a dict
source_control_sync_job_create_properties_from_dict = SourceControlSyncJobCreateProperties.from_dict(source_control_sync_job_create_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


