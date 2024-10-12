# GdataBlobstore2Info

gdata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_generation** | **str** | gdata | [optional] 
**blob_id** | **str** | gdata | [optional] 
**download_read_handle** | **bytearray** | gdata | [optional] 
**read_token** | **str** | gdata | [optional] 
**upload_metadata_container** | **bytearray** | gdata | [optional] 

## Example

```python
from openapi_client.models.gdata_blobstore2_info import GdataBlobstore2Info

# TODO update the JSON string below
json = "{}"
# create an instance of GdataBlobstore2Info from a JSON string
gdata_blobstore2_info_instance = GdataBlobstore2Info.from_json(json)
# print the JSON string representation of the object
print(GdataBlobstore2Info.to_json())

# convert the object into a dict
gdata_blobstore2_info_dict = gdata_blobstore2_info_instance.to_dict()
# create an instance of GdataBlobstore2Info from a dict
gdata_blobstore2_info_from_dict = GdataBlobstore2Info.from_dict(gdata_blobstore2_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


