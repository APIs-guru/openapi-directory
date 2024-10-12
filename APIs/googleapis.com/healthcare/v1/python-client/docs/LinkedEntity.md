# LinkedEntity

EntityMentions can be linked to multiple entities using a LinkedEntity message lets us add other fields, e.g. confidence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_id** | **str** | entity_id is a concept unique identifier. These are prefixed by a string that identifies the entity coding system, followed by the unique identifier within that system. For example, \&quot;UMLS/C0000970\&quot;. This also supports ad hoc entities, which are formed by normalizing entity mention content. | [optional] 

## Example

```python
from openapi_client.models.linked_entity import LinkedEntity

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedEntity from a JSON string
linked_entity_instance = LinkedEntity.from_json(json)
# print the JSON string representation of the object
print(LinkedEntity.to_json())

# convert the object into a dict
linked_entity_dict = linked_entity_instance.to_dict()
# create an instance of LinkedEntity from a dict
linked_entity_from_dict = LinkedEntity.from_dict(linked_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


