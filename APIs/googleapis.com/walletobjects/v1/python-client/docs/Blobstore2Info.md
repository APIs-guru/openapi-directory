# Blobstore2Info

Information to read/write to blobstore2.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_generation** | **str** | The blob generation id. | [optional] 
**blob_id** | **str** | The blob id, e.g., /blobstore/prod/playground/scotty | [optional] 
**download_read_handle** | **bytearray** | Read handle passed from Bigstore -&gt; Scotty for a GCS download. This is a signed, serialized blobstore2.ReadHandle proto which must never be set outside of Bigstore, and is not applicable to non-GCS media downloads. | [optional] 
**read_token** | **str** | The blob read token. Needed to read blobs that have not been replicated. Might not be available until the final call. | [optional] 
**upload_metadata_container** | **bytearray** | Metadata passed from Blobstore -&gt; Scotty for a new GCS upload. This is a signed, serialized blobstore2.BlobMetadataContainer proto which must never be consumed outside of Bigstore, and is not applicable to non-GCS media uploads. | [optional] 

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


