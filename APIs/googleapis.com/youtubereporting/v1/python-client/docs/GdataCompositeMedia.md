# GdataCompositeMedia

gdata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_ref** | **bytearray** | gdata | [optional] 
**blobstore2_info** | [**GdataBlobstore2Info**](GdataBlobstore2Info.md) |  | [optional] 
**cosmo_binary_reference** | **bytearray** | gdata | [optional] 
**crc32c_hash** | **int** | gdata | [optional] 
**inline** | **bytearray** | gdata | [optional] 
**length** | **str** | gdata | [optional] 
**md5_hash** | **bytearray** | gdata | [optional] 
**object_id** | [**GdataObjectId**](GdataObjectId.md) |  | [optional] 
**path** | **str** | gdata | [optional] 
**reference_type** | **str** | gdata | [optional] 
**sha1_hash** | **bytearray** | gdata | [optional] 

## Example

```python
from openapi_client.models.gdata_composite_media import GdataCompositeMedia

# TODO update the JSON string below
json = "{}"
# create an instance of GdataCompositeMedia from a JSON string
gdata_composite_media_instance = GdataCompositeMedia.from_json(json)
# print the JSON string representation of the object
print(GdataCompositeMedia.to_json())

# convert the object into a dict
gdata_composite_media_dict = gdata_composite_media_instance.to_dict()
# create an instance of GdataCompositeMedia from a dict
gdata_composite_media_from_dict = GdataCompositeMedia.from_dict(gdata_composite_media_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


