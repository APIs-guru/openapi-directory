# SearchSchemaValue

Value object for schema results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the schema. | [optional] 
**facet** | **bool** | The boolean that indicates whether or not the field is a facet. | 
**indexed** | **bool** | The boolean that indicates the field is searchable as free text. | 
**name** | **str** | The name of the schema. | [optional] 
**owner_type** | **List[str]** | The array of workflows containing the field. | [optional] 
**stored** | **bool** | The boolean that indicates whether or not the field is stored. | 
**type** | **str** | The type. | [optional] 

## Example

```python
from openapi_client.models.search_schema_value import SearchSchemaValue

# TODO update the JSON string below
json = "{}"
# create an instance of SearchSchemaValue from a JSON string
search_schema_value_instance = SearchSchemaValue.from_json(json)
# print the JSON string representation of the object
print(SearchSchemaValue.to_json())

# convert the object into a dict
search_schema_value_dict = search_schema_value_instance.to_dict()
# create an instance of SearchSchemaValue from a dict
search_schema_value_from_dict = SearchSchemaValue.from_dict(search_schema_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


