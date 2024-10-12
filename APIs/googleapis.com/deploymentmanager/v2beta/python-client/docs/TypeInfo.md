# TypeInfo

Type Information. Contains detailed information about a composite type, base type, or base type with specific collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the type. | [optional] 
**documentation_link** | **str** | For swagger 2.0 externalDocs field will be used. For swagger 1.2 this field will be empty. | [optional] 
**kind** | **str** | Output only. Type of the output. Always &#x60;deploymentManager#TypeInfo&#x60; for TypeInfo. | [optional] 
**name** | **str** | The base type or composite type name. | [optional] 
**var_schema** | [**TypeInfoSchemaInfo**](TypeInfoSchemaInfo.md) |  | [optional] 
**self_link** | **str** | Output only. Self link for the type provider. | [optional] 
**title** | **str** | The title on the API descriptor URL provided. | [optional] 

## Example

```python
from openapi_client.models.type_info import TypeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TypeInfo from a JSON string
type_info_instance = TypeInfo.from_json(json)
# print the JSON string representation of the object
print(TypeInfo.to_json())

# convert the object into a dict
type_info_dict = type_info_instance.to_dict()
# create an instance of TypeInfo from a dict
type_info_from_dict = TypeInfo.from_dict(type_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


