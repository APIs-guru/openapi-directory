# EntityAdWordsLinkEntity

Web property being linked.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**web_property_ref** | [**WebPropertyRef**](WebPropertyRef.md) |  | [optional] 

## Example

```python
from openapi_client.models.entity_ad_words_link_entity import EntityAdWordsLinkEntity

# TODO update the JSON string below
json = "{}"
# create an instance of EntityAdWordsLinkEntity from a JSON string
entity_ad_words_link_entity_instance = EntityAdWordsLinkEntity.from_json(json)
# print the JSON string representation of the object
print(EntityAdWordsLinkEntity.to_json())

# convert the object into a dict
entity_ad_words_link_entity_dict = entity_ad_words_link_entity_instance.to_dict()
# create an instance of EntityAdWordsLinkEntity from a dict
entity_ad_words_link_entity_from_dict = EntityAdWordsLinkEntity.from_dict(entity_ad_words_link_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


