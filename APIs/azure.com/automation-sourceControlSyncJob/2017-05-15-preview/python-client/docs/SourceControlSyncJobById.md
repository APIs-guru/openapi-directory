# SourceControlSyncJobById

Definition of the source control sync job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the job. | [optional] 
**properties** | [**SourceControlSyncJobByIdProperties**](SourceControlSyncJobByIdProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_control_sync_job_by_id import SourceControlSyncJobById

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlSyncJobById from a JSON string
source_control_sync_job_by_id_instance = SourceControlSyncJobById.from_json(json)
# print the JSON string representation of the object
print(SourceControlSyncJobById.to_json())

# convert the object into a dict
source_control_sync_job_by_id_dict = source_control_sync_job_by_id_instance.to_dict()
# create an instance of SourceControlSyncJobById from a dict
source_control_sync_job_by_id_from_dict = SourceControlSyncJobById.from_dict(source_control_sync_job_by_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


