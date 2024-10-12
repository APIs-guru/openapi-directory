# NamedEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **object** | JSON-LD context for the entity. | [optional] 
**id** | **str** | Unique ID of the entity. | [optional] 
**type** | **List[str]** | Type of the entity. | 
**comment** | **str** | Developer comment about the entity. | [optional] 
**description** | **str** | Detailed description of the entity. | [optional] 
**display_name** | **str** | Display name of the entity. | [optional] 
**name** | **str** | The programmatic name of the named entity. | 

## Example

```python
from openapi_client.models.named_entity import NamedEntity

# TODO update the JSON string below
json = "{}"
# create an instance of NamedEntity from a JSON string
named_entity_instance = NamedEntity.from_json(json)
# print the JSON string representation of the object
print(NamedEntity.to_json())

# convert the object into a dict
named_entity_dict = named_entity_instance.to_dict()
# create an instance of NamedEntity from a dict
named_entity_from_dict = NamedEntity.from_dict(named_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


