# JsonSchemaVariant

In a variant data type, the value of one property is used to determine how to interpret the entire entity. Its value must exist in a map of descriminant values to schema names.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discriminant** | **str** | The name of the type discriminant property. | [optional] 
**map** | [**List[JsonSchemaVariantMapInner]**](JsonSchemaVariantMapInner.md) | The map of discriminant value to schema to use for parsing.. | [optional] 

## Example

```python
from openapi_client.models.json_schema_variant import JsonSchemaVariant

# TODO update the JSON string below
json = "{}"
# create an instance of JsonSchemaVariant from a JSON string
json_schema_variant_instance = JsonSchemaVariant.from_json(json)
# print the JSON string representation of the object
print(JsonSchemaVariant.to_json())

# convert the object into a dict
json_schema_variant_dict = json_schema_variant_instance.to_dict()
# create an instance of JsonSchemaVariant from a dict
json_schema_variant_from_dict = JsonSchemaVariant.from_dict(json_schema_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


