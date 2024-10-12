# IndexConfig

Configuration for an indexed field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp when the index was last modified.This is used to return the timestamp, and will be ignored if supplied during update. | [optional] [readonly] 
**field_path** | **str** | Required. The LogEntry field path to index.Note that some paths are automatically indexed, and other paths are not eligible for indexing. See indexing documentation( https://cloud.google.com/logging/docs/view/advanced-queries#indexed-fields) for details.For example: jsonPayload.request.status | [optional] 
**type** | **str** | Required. The type of data in this index. | [optional] 

## Example

```python
from openapi_client.models.index_config import IndexConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IndexConfig from a JSON string
index_config_instance = IndexConfig.from_json(json)
# print the JSON string representation of the object
print(IndexConfig.to_json())

# convert the object into a dict
index_config_dict = index_config_instance.to_dict()
# create an instance of IndexConfig from a dict
index_config_from_dict = IndexConfig.from_dict(index_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


