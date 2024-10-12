# EntityRecordV2dot1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bing_id** | **str** | Bing unique identifier of the recognized entity. Use in conjunction with the Bing Entity Search API to fetch additional relevant information. | [optional] 
**matches** | [**List[MatchRecordV2dot1]**](MatchRecordV2dot1.md) | List of instances this entity appears in the text. | [optional] 
**name** | **str** | Entity formal name. | [optional] 
**sub_type** | **str** | Entity sub type from Named Entity Recognition model | [optional] 
**type** | **str** | Entity type from Named Entity Recognition model | [optional] 
**wikipedia_id** | **str** | Wikipedia unique identifier of the recognized entity. | [optional] 
**wikipedia_language** | **str** | Wikipedia language for which the WikipediaId and WikipediaUrl refers to. | [optional] 
**wikipedia_url** | **str** | URL for the entity&#39;s English Wikipedia page. | [optional] [readonly] 

## Example

```python
from openapi_client.models.entity_record_v2dot1 import EntityRecordV2dot1

# TODO update the JSON string below
json = "{}"
# create an instance of EntityRecordV2dot1 from a JSON string
entity_record_v2dot1_instance = EntityRecordV2dot1.from_json(json)
# print the JSON string representation of the object
print(EntityRecordV2dot1.to_json())

# convert the object into a dict
entity_record_v2dot1_dict = entity_record_v2dot1_instance.to_dict()
# create an instance of EntityRecordV2dot1 from a dict
entity_record_v2dot1_from_dict = EntityRecordV2dot1.from_dict(entity_record_v2dot1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


