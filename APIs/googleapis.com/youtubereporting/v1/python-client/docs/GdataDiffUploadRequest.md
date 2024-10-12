# GdataDiffUploadRequest

gdata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checksums_info** | [**GdataCompositeMedia**](GdataCompositeMedia.md) |  | [optional] 
**object_info** | [**GdataCompositeMedia**](GdataCompositeMedia.md) |  | [optional] 
**object_version** | **str** | gdata | [optional] 

## Example

```python
from openapi_client.models.gdata_diff_upload_request import GdataDiffUploadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GdataDiffUploadRequest from a JSON string
gdata_diff_upload_request_instance = GdataDiffUploadRequest.from_json(json)
# print the JSON string representation of the object
print(GdataDiffUploadRequest.to_json())

# convert the object into a dict
gdata_diff_upload_request_dict = gdata_diff_upload_request_instance.to_dict()
# create an instance of GdataDiffUploadRequest from a dict
gdata_diff_upload_request_from_dict = GdataDiffUploadRequest.from_dict(gdata_diff_upload_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


