# FunctionEntity

Function's parent is a schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_features** | **Dict[str, object]** | Custom engine specific features. | [optional] 
**sql_code** | **str** | The SQL code which creates the function. | [optional] 

## Example

```python
from openapi_client.models.function_entity import FunctionEntity

# TODO update the JSON string below
json = "{}"
# create an instance of FunctionEntity from a JSON string
function_entity_instance = FunctionEntity.from_json(json)
# print the JSON string representation of the object
print(FunctionEntity.to_json())

# convert the object into a dict
function_entity_dict = function_entity_instance.to_dict()
# create an instance of FunctionEntity from a dict
function_entity_from_dict = FunctionEntity.from_dict(function_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


