# BackupRunsListResponse

Backup run list results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[BackupRun]**](BackupRun.md) | A list of backup runs in reverse chronological order of the enqueued time. | [optional] 
**kind** | **str** | This is always &#x60;sql#backupRunsList&#x60;. | [optional] 
**next_page_token** | **str** | The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. | [optional] 

## Example

```python
from openapi_client.models.backup_runs_list_response import BackupRunsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BackupRunsListResponse from a JSON string
backup_runs_list_response_instance = BackupRunsListResponse.from_json(json)
# print the JSON string representation of the object
print(BackupRunsListResponse.to_json())

# convert the object into a dict
backup_runs_list_response_dict = backup_runs_list_response_instance.to_dict()
# create an instance of BackupRunsListResponse from a dict
backup_runs_list_response_from_dict = BackupRunsListResponse.from_dict(backup_runs_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


