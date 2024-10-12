# GdataDiffChecksumsResponse

Backend response for a Diff get checksums response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checksums_location** | [**GdataCompositeMedia**](GdataCompositeMedia.md) |  | [optional] 
**chunk_size_bytes** | **str** | The chunk size of checksums. Must be a multiple of 256KB. | [optional] 
**object_location** | [**GdataCompositeMedia**](GdataCompositeMedia.md) |  | [optional] 
**object_size_bytes** | **str** | The total size of the server object. | [optional] 
**object_version** | **str** | The object version of the object the checksums are being returned for. | [optional] 

## Example

```python
from openapi_client.models.gdata_diff_checksums_response import GdataDiffChecksumsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GdataDiffChecksumsResponse from a JSON string
gdata_diff_checksums_response_instance = GdataDiffChecksumsResponse.from_json(json)
# print the JSON string representation of the object
print(GdataDiffChecksumsResponse.to_json())

# convert the object into a dict
gdata_diff_checksums_response_dict = gdata_diff_checksums_response_instance.to_dict()
# create an instance of GdataDiffChecksumsResponse from a dict
gdata_diff_checksums_response_from_dict = GdataDiffChecksumsResponse.from_dict(gdata_diff_checksums_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


