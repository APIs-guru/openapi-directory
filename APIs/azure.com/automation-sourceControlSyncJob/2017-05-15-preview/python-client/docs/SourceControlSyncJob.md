# SourceControlSyncJob

Definition of the source control sync job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**properties** | [**SourceControlSyncJobProperties**](SourceControlSyncJobProperties.md) |  | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.source_control_sync_job import SourceControlSyncJob

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlSyncJob from a JSON string
source_control_sync_job_instance = SourceControlSyncJob.from_json(json)
# print the JSON string representation of the object
print(SourceControlSyncJob.to_json())

# convert the object into a dict
source_control_sync_job_dict = source_control_sync_job_instance.to_dict()
# create an instance of SourceControlSyncJob from a dict
source_control_sync_job_from_dict = SourceControlSyncJob.from_dict(source_control_sync_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


