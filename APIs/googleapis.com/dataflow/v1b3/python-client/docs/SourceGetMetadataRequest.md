# SourceGetMetadataRequest

A request to compute the SourceMetadata of a Source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**Source**](Source.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_get_metadata_request import SourceGetMetadataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SourceGetMetadataRequest from a JSON string
source_get_metadata_request_instance = SourceGetMetadataRequest.from_json(json)
# print the JSON string representation of the object
print(SourceGetMetadataRequest.to_json())

# convert the object into a dict
source_get_metadata_request_dict = source_get_metadata_request_instance.to_dict()
# create an instance of SourceGetMetadataRequest from a dict
source_get_metadata_request_from_dict = SourceGetMetadataRequest.from_dict(source_get_metadata_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


