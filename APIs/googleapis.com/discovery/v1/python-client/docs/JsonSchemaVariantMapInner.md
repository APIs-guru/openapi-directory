# JsonSchemaVariantMapInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ref** | **str** |  | [optional] 
**type_value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.json_schema_variant_map_inner import JsonSchemaVariantMapInner

# TODO update the JSON string below
json = "{}"
# create an instance of JsonSchemaVariantMapInner from a JSON string
json_schema_variant_map_inner_instance = JsonSchemaVariantMapInner.from_json(json)
# print the JSON string representation of the object
print(JsonSchemaVariantMapInner.to_json())

# convert the object into a dict
json_schema_variant_map_inner_dict = json_schema_variant_map_inner_instance.to_dict()
# create an instance of JsonSchemaVariantMapInner from a dict
json_schema_variant_map_inner_from_dict = JsonSchemaVariantMapInner.from_dict(json_schema_variant_map_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


