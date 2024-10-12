# CompositeMedia

A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_ref** | **bytearray** | Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef. | [optional] 
**blobstore2_info** | [**Blobstore2Info**](Blobstore2Info.md) |  | [optional] 
**cosmo_binary_reference** | **bytearray** | A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn&#39;t support JavaScript. This prevents us from including the actual type of this field. | [optional] 
**crc32c_hash** | **int** | crc32.c hash for the payload. | [optional] 
**inline** | **bytearray** | Media data, set if reference_type is INLINE | [optional] 
**length** | **str** | Size of the data, in bytes | [optional] 
**md5_hash** | **bytearray** | MD5 hash for the payload. | [optional] 
**object_id** | [**ObjectId**](ObjectId.md) |  | [optional] 
**path** | **str** | Path to the data, set if reference_type is PATH | [optional] 
**reference_type** | **str** | Describes what the field reference contains. | [optional] 
**sha1_hash** | **bytearray** | SHA-1 hash for the payload. | [optional] 

## Example

```python
from openapi_client.models.composite_media import CompositeMedia

# TODO update the JSON string below
json = "{}"
# create an instance of CompositeMedia from a JSON string
composite_media_instance = CompositeMedia.from_json(json)
# print the JSON string representation of the object
print(CompositeMedia.to_json())

# convert the object into a dict
composite_media_dict = composite_media_instance.to_dict()
# create an instance of CompositeMedia from a dict
composite_media_from_dict = CompositeMedia.from_dict(composite_media_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


