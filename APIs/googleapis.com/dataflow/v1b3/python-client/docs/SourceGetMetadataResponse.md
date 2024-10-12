# SourceGetMetadataResponse

The result of a SourceGetMetadataOperation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**SourceMetadata**](SourceMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_get_metadata_response import SourceGetMetadataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SourceGetMetadataResponse from a JSON string
source_get_metadata_response_instance = SourceGetMetadataResponse.from_json(json)
# print the JSON string representation of the object
print(SourceGetMetadataResponse.to_json())

# convert the object into a dict
source_get_metadata_response_dict = source_get_metadata_response_instance.to_dict()
# create an instance of SourceGetMetadataResponse from a dict
source_get_metadata_response_from_dict = SourceGetMetadataResponse.from_dict(source_get_metadata_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


