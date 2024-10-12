# SourceControlSyncJobCreateParameters

The parameters supplied to the create source control sync job operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SourceControlSyncJobCreateProperties**](SourceControlSyncJobCreateProperties.md) |  | 

## Example

```python
from openapi_client.models.source_control_sync_job_create_parameters import SourceControlSyncJobCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlSyncJobCreateParameters from a JSON string
source_control_sync_job_create_parameters_instance = SourceControlSyncJobCreateParameters.from_json(json)
# print the JSON string representation of the object
print(SourceControlSyncJobCreateParameters.to_json())

# convert the object into a dict
source_control_sync_job_create_parameters_dict = source_control_sync_job_create_parameters_instance.to_dict()
# create an instance of SourceControlSyncJobCreateParameters from a dict
source_control_sync_job_create_parameters_from_dict = SourceControlSyncJobCreateParameters.from_dict(source_control_sync_job_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


