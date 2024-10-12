# DiffChecksumsResponse

Backend response for a Diff get checksums response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checksums_location** | [**CompositeMedia**](CompositeMedia.md) |  | [optional] 
**chunk_size_bytes** | **str** | The chunk size of checksums. Must be a multiple of 256KB. | [optional] 
**object_location** | [**CompositeMedia**](CompositeMedia.md) |  | [optional] 
**object_size_bytes** | **str** | The total size of the server object. | [optional] 
**object_version** | **str** | The object version of the object the checksums are being returned for. | [optional] 

## Example

```python
from openapi_client.models.diff_checksums_response import DiffChecksumsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DiffChecksumsResponse from a JSON string
diff_checksums_response_instance = DiffChecksumsResponse.from_json(json)
# print the JSON string representation of the object
print(DiffChecksumsResponse.to_json())

# convert the object into a dict
diff_checksums_response_dict = diff_checksums_response_instance.to_dict()
# create an instance of DiffChecksumsResponse from a dict
diff_checksums_response_from_dict = DiffChecksumsResponse.from_dict(diff_checksums_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


