# GdataMedia

A reference to data stored on the filesystem, on GFS or in blobstore.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | Deprecated, use one of explicit hash type fields instead. Algorithm used for calculating the hash. As of 2011/01/21, \&quot;MD5\&quot; is the only possible value for this field. New values may be added at any time. | [optional] 
**bigstore_object_ref** | **bytearray** | Use object_id instead. | [optional] 
**blob_ref** | **bytearray** | Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef. | [optional] 
**blobstore2_info** | [**GdataBlobstore2Info**](GdataBlobstore2Info.md) |  | [optional] 
**composite_media** | [**List[GdataCompositeMedia]**](GdataCompositeMedia.md) | A composite media composed of one or more media objects, set if reference_type is COMPOSITE_MEDIA. The media length field must be set to the sum of the lengths of all composite media objects. Note: All composite media must have length specified. | [optional] 
**content_type** | **str** | MIME type of the data | [optional] 
**content_type_info** | [**GdataContentTypeInfo**](GdataContentTypeInfo.md) |  | [optional] 
**cosmo_binary_reference** | **bytearray** | A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn&#39;t support JavaScript. This prevents us from including the actual type of this field. | [optional] 
**crc32c_hash** | **int** | For Scotty Uploads: Scotty-provided hashes for uploads For Scotty Downloads: (WARNING: DO NOT USE WITHOUT PERMISSION FROM THE SCOTTY TEAM.) A Hash provided by the agent to be used to verify the data being downloaded. Currently only supported for inline payloads. Further, only crc32c_hash is currently supported. | [optional] 
**diff_checksums_response** | [**GdataDiffChecksumsResponse**](GdataDiffChecksumsResponse.md) |  | [optional] 
**diff_download_response** | [**GdataDiffDownloadResponse**](GdataDiffDownloadResponse.md) |  | [optional] 
**diff_upload_request** | [**GdataDiffUploadRequest**](GdataDiffUploadRequest.md) |  | [optional] 
**diff_upload_response** | [**GdataDiffUploadResponse**](GdataDiffUploadResponse.md) |  | [optional] 
**diff_version_response** | [**GdataDiffVersionResponse**](GdataDiffVersionResponse.md) |  | [optional] 
**download_parameters** | [**GdataDownloadParameters**](GdataDownloadParameters.md) |  | [optional] 
**filename** | **str** | Original file name | [optional] 
**hash** | **str** | Deprecated, use one of explicit hash type fields instead. These two hash related fields will only be populated on Scotty based media uploads and will contain the content of the hash group in the NotificationRequest: http://cs/#google3/uploader/service/proto/upload_listener.proto&amp;q&#x3D;class:Hash Hex encoded hash value of the uploaded media. | [optional] 
**hash_verified** | **bool** | For Scotty uploads only. If a user sends a hash code and the backend has requested that Scotty verify the upload against the client hash, Scotty will perform the check on behalf of the backend and will reject it if the hashes don&#39;t match. This is set to true if Scotty performed this verification. | [optional] 
**inline** | **bytearray** | Media data, set if reference_type is INLINE | [optional] 
**is_potential_retry** | **bool** | |is_potential_retry| is set false only when Scotty is certain that it has not sent the request before. When a client resumes an upload, this field must be set true in agent calls, because Scotty cannot be certain that it has never sent the request before due to potential failure in the session state persistence. | [optional] 
**length** | **str** | Size of the data, in bytes | [optional] 
**md5_hash** | **bytearray** | Scotty-provided MD5 hash for an upload. | [optional] 
**media_id** | **bytearray** | Media id to forward to the operation GetMedia. Can be set if reference_type is GET_MEDIA. | [optional] 
**object_id** | [**GdataObjectId**](GdataObjectId.md) |  | [optional] 
**path** | **str** | Path to the data, set if reference_type is PATH | [optional] 
**reference_type** | **str** | Describes what the field reference contains. | [optional] 
**sha1_hash** | **bytearray** | Scotty-provided SHA1 hash for an upload. | [optional] 
**sha256_hash** | **bytearray** | Scotty-provided SHA256 hash for an upload. | [optional] 
**timestamp** | **str** | Time at which the media data was last updated, in milliseconds since UNIX epoch | [optional] 
**token** | **str** | A unique fingerprint/version id for the media data | [optional] 

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


