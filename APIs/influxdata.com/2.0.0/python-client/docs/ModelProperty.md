# ModelProperty

The value associated with a key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | [**PropertyKey**](PropertyKey.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 
**value** | [**Expression**](Expression.md) |  | [optional] 

## Example

```python
from openapi_client.models.model_property import ModelProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ModelProperty from a JSON string
model_property_instance = ModelProperty.from_json(json)
# print the JSON string representation of the object
print(ModelProperty.to_json())

# convert the object into a dict
model_property_dict = model_property_instance.to_dict()
# create an instance of ModelProperty from a dict
model_property_from_dict = ModelProperty.from_dict(model_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


