# EntityMention

Represents a mention for an entity in the text. Currently, proper noun mentions are supported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | [**TextSpan**](TextSpan.md) |  | [optional] 
**type** | **str** | The type of the entity mention. | [optional] 

## Example

```python
from openapi_client.models.entity_mention import EntityMention

# TODO update the JSON string below
json = "{}"
# create an instance of EntityMention from a JSON string
entity_mention_instance = EntityMention.from_json(json)
# print the JSON string representation of the object
print(EntityMention.to_json())

# convert the object into a dict
entity_mention_dict = entity_mention_instance.to_dict()
# create an instance of EntityMention from a dict
entity_mention_from_dict = EntityMention.from_dict(entity_mention_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


