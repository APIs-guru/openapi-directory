# SearchMetadataSchema

Schema metadata for search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the metadata schema. | [optional] 
**version** | **int** | The version of the metadata schema. | [optional] 

## Example

```python
from openapi_client.models.search_metadata_schema import SearchMetadataSchema

# TODO update the JSON string below
json = "{}"
# create an instance of SearchMetadataSchema from a JSON string
search_metadata_schema_instance = SearchMetadataSchema.from_json(json)
# print the JSON string representation of the object
print(SearchMetadataSchema.to_json())

# convert the object into a dict
search_metadata_schema_dict = search_metadata_schema_instance.to_dict()
# create an instance of SearchMetadataSchema from a dict
search_metadata_schema_from_dict = SearchMetadataSchema.from_dict(search_metadata_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


