# Declaration

Represents a relation which is not managed by Dataform but which may be referenced by Dataform actions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relation_descriptor** | [**RelationDescriptor**](RelationDescriptor.md) |  | [optional] 

## Example

```python
from openapi_client.models.declaration import Declaration

# TODO update the JSON string below
json = "{}"
# create an instance of Declaration from a JSON string
declaration_instance = Declaration.from_json(json)
# print the JSON string representation of the object
print(Declaration.to_json())

# convert the object into a dict
declaration_dict = declaration_instance.to_dict()
# create an instance of Declaration from a dict
declaration_from_dict = Declaration.from_dict(declaration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


