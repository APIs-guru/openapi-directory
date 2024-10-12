# AssemblyCollection

A collection of assembly definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[AssemblyDefinition]**](AssemblyDefinition.md) |  | [optional] 

## Example

```python
from openapi_client.models.assembly_collection import AssemblyCollection

# TODO update the JSON string below
json = "{}"
# create an instance of AssemblyCollection from a JSON string
assembly_collection_instance = AssemblyCollection.from_json(json)
# print the JSON string representation of the object
print(AssemblyCollection.to_json())

# convert the object into a dict
assembly_collection_dict = assembly_collection_instance.to_dict()
# create an instance of AssemblyCollection from a dict
assembly_collection_from_dict = AssemblyCollection.from_dict(assembly_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


