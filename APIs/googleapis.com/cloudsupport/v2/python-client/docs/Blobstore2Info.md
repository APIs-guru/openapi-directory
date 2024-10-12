# Blobstore2Info

# gdata.* are outside protos with mising documentation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_generation** | **str** | # gdata.* are outside protos with mising documentation | [optional] 
**blob_id** | **str** | # gdata.* are outside protos with mising documentation | [optional] 
**download_read_handle** | **bytearray** | # gdata.* are outside protos with mising documentation | [optional] 
**read_token** | **str** | # gdata.* are outside protos with mising documentation | [optional] 
**upload_metadata_container** | **bytearray** | # gdata.* are outside protos with mising documentation | [optional] 

## Example

```python
from openapi_client.models.blobstore2_info import Blobstore2Info

# TODO update the JSON string below
json = "{}"
# create an instance of Blobstore2Info from a JSON string
blobstore2_info_instance = Blobstore2Info.from_json(json)
# print the JSON string representation of the object
print(Blobstore2Info.to_json())

# convert the object into a dict
blobstore2_info_dict = blobstore2_info_instance.to_dict()
# create an instance of Blobstore2Info from a dict
blobstore2_info_from_dict = Blobstore2Info.from_dict(blobstore2_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


