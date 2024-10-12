# DiffDownloadResponse

Backend response for a Diff download response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_location** | [**CompositeMedia**](CompositeMedia.md) |  | [optional] 

## Example

```python
from openapi_client.models.diff_download_response import DiffDownloadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DiffDownloadResponse from a JSON string
diff_download_response_instance = DiffDownloadResponse.from_json(json)
# print the JSON string representation of the object
print(DiffDownloadResponse.to_json())

# convert the object into a dict
diff_download_response_dict = diff_download_response_instance.to_dict()
# create an instance of DiffDownloadResponse from a dict
diff_download_response_from_dict = DiffDownloadResponse.from_dict(diff_download_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


