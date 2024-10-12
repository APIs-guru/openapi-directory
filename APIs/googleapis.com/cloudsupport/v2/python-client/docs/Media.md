# Media

# gdata.* are outside protos with mising documentation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | # gdata.* are outside protos with mising documentation | [optional] 
**bigstore_object_ref** | **bytearray** | # gdata.* are outside protos with mising documentation | [optional] 
**blob_ref** | **bytearray** | # gdata.* are outside protos with mising documentation | [optional] 
**blobstore2_info** | [**Blobstore2Info**](Blobstore2Info.md) |  | [optional] 
**composite_media** | [**List[CompositeMedia]**](CompositeMedia.md) | # gdata.* are outside protos with mising documentation | [optional] 
**content_type** | **str** | # gdata.* are outside protos with mising documentation | [optional] 
**content_type_info** | [**ContentTypeInfo**](ContentTypeInfo.md) |  | [optional] 
**cosmo_binary_reference** | **bytearray** | # gdata.* are outside protos with mising documentation | [optional] 
**crc32c_hash** | **int** | # gdata.* are outside protos with mising documentation | [optional] 
**diff_checksums_response** | [**DiffChecksumsResponse**](DiffChecksumsResponse.md) |  | [optional] 
**diff_download_response** | [**DiffDownloadResponse**](DiffDownloadResponse.md) |  | [optional] 
**diff_upload_request** | [**DiffUploadRequest**](DiffUploadRequest.md) |  | [optional] 
**diff_upload_response** | [**DiffUploadResponse**](DiffUploadResponse.md) |  | [optional] 
**diff_version_response** | [**DiffVersionResponse**](DiffVersionResponse.md) |  | [optional] 
**download_parameters** | [**DownloadParameters**](DownloadParameters.md) |  | [optional] 
**filename** | **str** | # gdata.* are outside protos with mising documentation | [optional] 
**hash** | **str** | # gdata.* are outside protos with mising documentation | [optional] 
**hash_verified** | **bool** | # gdata.* are outside protos with mising documentation | [optional] 
**inline** | **bytearray** | # gdata.* are outside protos with mising documentation | [optional] 
**is_potential_retry** | **bool** | # gdata.* are outside protos with mising documentation | [optional] 
**length** | **str** | # gdata.* are outside protos with mising documentation | [optional] 
**md5_hash** | **bytearray** | # gdata.* are outside protos with mising documentation | [optional] 
**media_id** | **bytearray** | # gdata.* are outside protos with mising documentation | [optional] 
**object_id** | [**ObjectId**](ObjectId.md) |  | [optional] 
**path** | **str** | # gdata.* are outside protos with mising documentation | [optional] 
**reference_type** | **str** | # gdata.* are outside protos with mising documentation | [optional] 
**sha1_hash** | **bytearray** | # gdata.* are outside protos with mising documentation | [optional] 
**sha256_hash** | **bytearray** | # gdata.* are outside protos with mising documentation | [optional] 
**timestamp** | **str** | # gdata.* are outside protos with mising documentation | [optional] 
**token** | **str** | # gdata.* are outside protos with mising documentation | [optional] 

## Example

```python
from openapi_client.models.media import Media

# TODO update the JSON string below
json = "{}"
# create an instance of Media from a JSON string
media_instance = Media.from_json(json)
# print the JSON string representation of the object
print(Media.to_json())

# convert the object into a dict
media_dict = media_instance.to_dict()
# create an instance of Media from a dict
media_from_dict = Media.from_dict(media_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


