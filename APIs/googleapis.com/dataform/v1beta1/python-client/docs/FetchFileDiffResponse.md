# FetchFileDiffResponse

`FetchFileDiff` response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted_diff** | **str** | The raw formatted Git diff for the file. | [optional] 

## Example

```python
from openapi_client.models.fetch_file_diff_response import FetchFileDiffResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchFileDiffResponse from a JSON string
fetch_file_diff_response_instance = FetchFileDiffResponse.from_json(json)
# print the JSON string representation of the object
print(FetchFileDiffResponse.to_json())

# convert the object into a dict
fetch_file_diff_response_dict = fetch_file_diff_response_instance.to_dict()
# create an instance of FetchFileDiffResponse from a dict
fetch_file_diff_response_from_dict = FetchFileDiffResponse.from_dict(fetch_file_diff_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


