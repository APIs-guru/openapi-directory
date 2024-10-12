# EntityList

EntityList stores entities in a format that can be translated to a table in the Alert Center UI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[Entity]**](Entity.md) | List of entities affected by the alert. | [optional] 
**headers** | **List[str]** | Headers of the values in entities. If no value is defined in Entity, this field should be empty. | [optional] 
**name** | **str** | Name of the key detail used to display this entity list. | [optional] 

## Example

```python
from openapi_client.models.entity_list import EntityList

# TODO update the JSON string below
json = "{}"
# create an instance of EntityList from a JSON string
entity_list_instance = EntityList.from_json(json)
# print the JSON string representation of the object
print(EntityList.to_json())

# convert the object into a dict
entity_list_dict = entity_list_instance.to_dict()
# create an instance of EntityList from a dict
entity_list_from_dict = EntityList.from_dict(entity_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


