# FetchFileGitStatusesResponse

`FetchFileGitStatuses` response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uncommitted_file_changes** | [**List[UncommittedFileChange]**](UncommittedFileChange.md) | A list of all files which have uncommitted Git changes. There will only be a single entry for any given file. | [optional] 

## Example

```python
from openapi_client.models.fetch_file_git_statuses_response import FetchFileGitStatusesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchFileGitStatusesResponse from a JSON string
fetch_file_git_statuses_response_instance = FetchFileGitStatusesResponse.from_json(json)
# print the JSON string representation of the object
print(FetchFileGitStatusesResponse.to_json())

# convert the object into a dict
fetch_file_git_statuses_response_dict = fetch_file_git_statuses_response_instance.to_dict()
# create an instance of FetchFileGitStatusesResponse from a dict
fetch_file_git_statuses_response_from_dict = FetchFileGitStatusesResponse.from_dict(fetch_file_git_statuses_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


