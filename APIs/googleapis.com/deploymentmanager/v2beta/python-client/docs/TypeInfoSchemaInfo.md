# TypeInfoSchemaInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **str** | The properties that this composite type or base type collection accept as input, represented as a json blob, format is: JSON Schema Draft V4 | [optional] 
**output** | **str** | The properties that this composite type or base type collection exposes as output, these properties can be used for references, represented as json blob, format is: JSON Schema Draft V4 | [optional] 

## Example

```python
from openapi_client.models.type_info_schema_info import TypeInfoSchemaInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TypeInfoSchemaInfo from a JSON string
type_info_schema_info_instance = TypeInfoSchemaInfo.from_json(json)
# print the JSON string representation of the object
print(TypeInfoSchemaInfo.to_json())

# convert the object into a dict
type_info_schema_info_dict = type_info_schema_info_instance.to_dict()
# create an instance of TypeInfoSchemaInfo from a dict
type_info_schema_info_from_dict = TypeInfoSchemaInfo.from_dict(type_info_schema_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


