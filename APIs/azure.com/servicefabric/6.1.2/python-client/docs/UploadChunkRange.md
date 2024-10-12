# UploadChunkRange

Information about which portion of the file to upload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_position** | **str** | The end position of the portion of the file. It&#39;s represented by the number of bytes. | [optional] 
**start_position** | **str** | The start position of the portion of the file. It&#39;s represented by the number of bytes. | [optional] 

## Example

```python
from openapi_client.models.upload_chunk_range import UploadChunkRange

# TODO update the JSON string below
json = "{}"
# create an instance of UploadChunkRange from a JSON string
upload_chunk_range_instance = UploadChunkRange.from_json(json)
# print the JSON string representation of the object
print(UploadChunkRange.to_json())

# convert the object into a dict
upload_chunk_range_dict = upload_chunk_range_instance.to_dict()
# create an instance of UploadChunkRange from a dict
upload_chunk_range_from_dict = UploadChunkRange.from_dict(upload_chunk_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


