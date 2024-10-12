# FullTextEntities


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | [**List[FullTextEntitiesAnnotationsInner]**](FullTextEntitiesAnnotationsInner.md) |  | [optional] 
**cashtags** | [**List[CashtagEntity]**](CashtagEntity.md) |  | [optional] 
**hashtags** | [**List[HashtagEntity]**](HashtagEntity.md) |  | [optional] 
**mentions** | [**List[MentionEntity]**](MentionEntity.md) |  | [optional] 
**urls** | [**List[UrlEntity]**](UrlEntity.md) |  | [optional] 

## Example

```python
from openapi_client.models.full_text_entities import FullTextEntities

# TODO update the JSON string below
json = "{}"
# create an instance of FullTextEntities from a JSON string
full_text_entities_instance = FullTextEntities.from_json(json)
# print the JSON string representation of the object
print(FullTextEntities.to_json())

# convert the object into a dict
full_text_entities_dict = full_text_entities_instance.to_dict()
# create an instance of FullTextEntities from a dict
full_text_entities_from_dict = FullTextEntities.from_dict(full_text_entities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


