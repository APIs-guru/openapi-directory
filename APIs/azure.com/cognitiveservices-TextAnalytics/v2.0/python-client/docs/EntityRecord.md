# EntityRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bing_id** | **str** | Bing unique identifier of the recognized entity. Use in conjunction with the Bing Entity Search API to fetch additional relevant information. | [optional] 
**matches** | [**List[MatchRecord]**](MatchRecord.md) | List of instances this entity appears in the text. | [optional] [readonly] 
**name** | **str** | Entity formal name. | [optional] 
**wikipedia_id** | **str** | Wikipedia unique identifier of the recognized entity. | [optional] 
**wikipedia_language** | **str** | Wikipedia language for which the WikipediaId and WikipediaUrl refers to. | [optional] 
**wikipedia_url** | **str** | URL for the entity&#39;s English Wikipedia page. | [optional] [readonly] 

## Example

```python
from openapi_client.models.entity_record import EntityRecord

# TODO update the JSON string below
json = "{}"
# create an instance of EntityRecord from a JSON string
entity_record_instance = EntityRecord.from_json(json)
# print the JSON string representation of the object
print(EntityRecord.to_json())

# convert the object into a dict
entity_record_dict = entity_record_instance.to_dict()
# create an instance of EntityRecord from a dict
entity_record_from_dict = EntityRecord.from_dict(entity_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


