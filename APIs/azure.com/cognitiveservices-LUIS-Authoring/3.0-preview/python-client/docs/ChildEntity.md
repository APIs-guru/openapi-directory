# ChildEntity

The base child entity type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**List[ChildEntity]**](ChildEntity.md) | List of children | [optional] 
**id** | **str** | The ID (GUID) belonging to a child entity. | 
**instance_of** | **str** | Instance of Model. | [optional] 
**name** | **str** | The name of a child entity. | [optional] 
**readable_type** | [**ReadableType**](ReadableType.md) |  | [optional] 
**type_id** | **int** | The type ID of the Entity Model. | [optional] 

## Example

```python
from openapi_client.models.child_entity import ChildEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ChildEntity from a JSON string
child_entity_instance = ChildEntity.from_json(json)
# print the JSON string representation of the object
print(ChildEntity.to_json())

# convert the object into a dict
child_entity_dict = child_entity_instance.to_dict()
# create an instance of ChildEntity from a dict
child_entity_from_dict = ChildEntity.from_dict(child_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


