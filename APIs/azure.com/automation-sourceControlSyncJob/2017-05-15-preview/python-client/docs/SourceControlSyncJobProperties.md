# SourceControlSyncJobProperties

Definition of source control sync job properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | The creation time of the job. | [optional] [readonly] 
**end_time** | **datetime** | The end time of the job. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning state of the job. | [optional] 
**source_control_sync_job_id** | **str** | The source control sync job id. | [optional] 
**start_time** | **datetime** | The start time of the job. | [optional] [readonly] 
**sync_type** | **str** | The sync type. | [optional] 

## Example

```python
from openapi_client.models.source_control_sync_job_properties import SourceControlSyncJobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlSyncJobProperties from a JSON string
source_control_sync_job_properties_instance = SourceControlSyncJobProperties.from_json(json)
# print the JSON string representation of the object
print(SourceControlSyncJobProperties.to_json())

# convert the object into a dict
source_control_sync_job_properties_dict = source_control_sync_job_properties_instance.to_dict()
# create an instance of SourceControlSyncJobProperties from a dict
source_control_sync_job_properties_from_dict = SourceControlSyncJobProperties.from_dict(source_control_sync_job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


