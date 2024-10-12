# SourceControlSyncJobListResult

The response model for the list source control sync jobs operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The next link. | [optional] 
**value** | [**List[SourceControlSyncJob]**](SourceControlSyncJob.md) | The list of source control sync jobs. | [optional] 

## Example

```python
from openapi_client.models.source_control_sync_job_list_result import SourceControlSyncJobListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlSyncJobListResult from a JSON string
source_control_sync_job_list_result_instance = SourceControlSyncJobListResult.from_json(json)
# print the JSON string representation of the object
print(SourceControlSyncJobListResult.to_json())

# convert the object into a dict
source_control_sync_job_list_result_dict = source_control_sync_job_list_result_instance.to_dict()
# create an instance of SourceControlSyncJobListResult from a dict
source_control_sync_job_list_result_from_dict = SourceControlSyncJobListResult.from_dict(source_control_sync_job_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


