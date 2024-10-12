# GdataDiffDownloadResponse

Backend response for a Diff download response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_location** | [**GdataCompositeMedia**](GdataCompositeMedia.md) |  | [optional] 

## Example

```python
from openapi_client.models.gdata_diff_download_response import GdataDiffDownloadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GdataDiffDownloadResponse from a JSON string
gdata_diff_download_response_instance = GdataDiffDownloadResponse.from_json(json)
# print the JSON string representation of the object
print(GdataDiffDownloadResponse.to_json())

# convert the object into a dict
gdata_diff_download_response_dict = gdata_diff_download_response_instance.to_dict()
# create an instance of GdataDiffDownloadResponse from a dict
gdata_diff_download_response_from_dict = GdataDiffDownloadResponse.from_dict(gdata_diff_download_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


