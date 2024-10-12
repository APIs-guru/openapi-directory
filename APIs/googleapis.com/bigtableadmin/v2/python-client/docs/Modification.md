# Modification

A create, update, or delete of a particular column family.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create** | [**ColumnFamily**](ColumnFamily.md) |  | [optional] 
**drop** | **bool** | Drop (delete) the column family with the given ID, or fail if no such family exists. | [optional] 
**id** | **str** | The ID of the column family to be modified. | [optional] 
**update** | [**ColumnFamily**](ColumnFamily.md) |  | [optional] 

## Example

```python
from openapi_client.models.modification import Modification

# TODO update the JSON string below
json = "{}"
# create an instance of Modification from a JSON string
modification_instance = Modification.from_json(json)
# print the JSON string representation of the object
print(Modification.to_json())

# convert the object into a dict
modification_dict = modification_instance.to_dict()
# create an instance of Modification from a dict
modification_from_dict = Modification.from_dict(modification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


