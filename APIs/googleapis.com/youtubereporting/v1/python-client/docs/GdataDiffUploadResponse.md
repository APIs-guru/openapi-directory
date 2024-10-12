# GdataDiffUploadResponse

gdata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_version** | **str** | gdata | [optional] 
**original_object** | [**GdataCompositeMedia**](GdataCompositeMedia.md) |  | [optional] 

## Example

```python
from openapi_client.models.gdata_diff_upload_response import GdataDiffUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GdataDiffUploadResponse from a JSON string
gdata_diff_upload_response_instance = GdataDiffUploadResponse.from_json(json)
# print the JSON string representation of the object
print(GdataDiffUploadResponse.to_json())

# convert the object into a dict
gdata_diff_upload_response_dict = gdata_diff_upload_response_instance.to_dict()
# create an instance of GdataDiffUploadResponse from a dict
gdata_diff_upload_response_from_dict = GdataDiffUploadResponse.from_dict(gdata_diff_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


