# CompositeMedia

# gdata.* are outside protos with mising documentation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_ref** | **bytearray** | # gdata.* are outside protos with mising documentation | [optional] 
**blobstore2_info** | [**Blobstore2Info**](Blobstore2Info.md) |  | [optional] 
**cosmo_binary_reference** | **bytearray** | # gdata.* are outside protos with mising documentation | [optional] 
**crc32c_hash** | **int** | # gdata.* are outside protos with mising documentation | [optional] 
**inline** | **bytearray** | # gdata.* are outside protos with mising documentation | [optional] 
**length** | **str** | # gdata.* are outside protos with mising documentation | [optional] 
**md5_hash** | **bytearray** | # gdata.* are outside protos with mising documentation | [optional] 
**object_id** | [**ObjectId**](ObjectId.md) |  | [optional] 
**path** | **str** | # gdata.* are outside protos with mising documentation | [optional] 
**reference_type** | **str** | # gdata.* are outside protos with mising documentation | [optional] 
**sha1_hash** | **bytearray** | # gdata.* are outside protos with mising documentation | [optional] 

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


