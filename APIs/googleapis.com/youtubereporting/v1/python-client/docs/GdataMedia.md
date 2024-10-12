# GdataMedia

gdata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | gdata | [optional] 
**bigstore_object_ref** | **bytearray** | gdata | [optional] 
**blob_ref** | **bytearray** | gdata | [optional] 
**blobstore2_info** | [**GdataBlobstore2Info**](GdataBlobstore2Info.md) |  | [optional] 
**composite_media** | [**List[GdataCompositeMedia]**](GdataCompositeMedia.md) | gdata | [optional] 
**content_type** | **str** | gdata | [optional] 
**content_type_info** | [**GdataContentTypeInfo**](GdataContentTypeInfo.md) |  | [optional] 
**cosmo_binary_reference** | **bytearray** | gdata | [optional] 
**crc32c_hash** | **int** | gdata | [optional] 
**diff_checksums_response** | [**GdataDiffChecksumsResponse**](GdataDiffChecksumsResponse.md) |  | [optional] 
**diff_download_response** | [**GdataDiffDownloadResponse**](GdataDiffDownloadResponse.md) |  | [optional] 
**diff_upload_request** | [**GdataDiffUploadRequest**](GdataDiffUploadRequest.md) |  | [optional] 
**diff_upload_response** | [**GdataDiffUploadResponse**](GdataDiffUploadResponse.md) |  | [optional] 
**diff_version_response** | [**GdataDiffVersionResponse**](GdataDiffVersionResponse.md) |  | [optional] 
**download_parameters** | [**GdataDownloadParameters**](GdataDownloadParameters.md) |  | [optional] 
**filename** | **str** | gdata | [optional] 
**hash** | **str** | gdata | [optional] 
**hash_verified** | **bool** | gdata | [optional] 
**inline** | **bytearray** | gdata | [optional] 
**is_potential_retry** | **bool** | gdata | [optional] 
**length** | **str** | gdata | [optional] 
**md5_hash** | **bytearray** | gdata | [optional] 
**media_id** | **bytearray** | gdata | [optional] 
**object_id** | [**GdataObjectId**](GdataObjectId.md) |  | [optional] 
**path** | **str** | gdata | [optional] 
**reference_type** | **str** | gdata | [optional] 
**sha1_hash** | **bytearray** | gdata | [optional] 
**sha256_hash** | **bytearray** | gdata | [optional] 
**timestamp** | **str** | gdata | [optional] 
**token** | **str** | gdata | [optional] 

## Example

```python
from openapi_client.models.gdata_media import GdataMedia

# TODO update the JSON string below
json = "{}"
# create an instance of GdataMedia from a JSON string
gdata_media_instance = GdataMedia.from_json(json)
# print the JSON string representation of the object
print(GdataMedia.to_json())

# convert the object into a dict
gdata_media_dict = gdata_media_instance.to_dict()
# create an instance of GdataMedia from a dict
gdata_media_from_dict = GdataMedia.from_dict(gdata_media_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


