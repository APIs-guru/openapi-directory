# SourceMetadata

Metadata about a Source useful for automatically optimizing and tuning the pipeline, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimated_size_bytes** | **str** | An estimate of the total size (in bytes) of the data that would be read from this source. This estimate is in terms of external storage size, before any decompression or other processing done by the reader. | [optional] 
**infinite** | **bool** | Specifies that the size of this source is known to be infinite (this is a streaming source). | [optional] 
**produces_sorted_keys** | **bool** | Whether this source is known to produce key/value pairs with the (encoded) keys in lexicographically sorted order. | [optional] 

## Example

```python
from openapi_client.models.source_metadata import SourceMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SourceMetadata from a JSON string
source_metadata_instance = SourceMetadata.from_json(json)
# print the JSON string representation of the object
print(SourceMetadata.to_json())

# convert the object into a dict
source_metadata_dict = source_metadata_instance.to_dict()
# create an instance of SourceMetadata from a dict
source_metadata_from_dict = SourceMetadata.from_dict(source_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


