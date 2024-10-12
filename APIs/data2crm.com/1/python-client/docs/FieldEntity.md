# FieldEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**array_item** | **str** | Array Item | [optional] 
**entity** | **List[str]** | Entity | [optional] 
**format** | **str** | Format | [optional] 
**id** | **str** | Field Identifier | [optional] 
**is_enum** | **bool** | Is Enum | [optional] 
**label** | **str** | Label | [optional] 
**limit** | **int** | Limit | [optional] 
**methods** | **object** |  | [optional] 
**name** | **str** | Name | [optional] 
**relation** | **List[str]** | Relation | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.field_entity import FieldEntity

# TODO update the JSON string below
json = "{}"
# create an instance of FieldEntity from a JSON string
field_entity_instance = FieldEntity.from_json(json)
# print the JSON string representation of the object
print(FieldEntity.to_json())

# convert the object into a dict
field_entity_dict = field_entity_instance.to_dict()
# create an instance of FieldEntity from a dict
field_entity_from_dict = FieldEntity.from_dict(field_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


