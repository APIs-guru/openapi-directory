# News200ResponseEntriesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guidislink** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**link** | **str** |  | [optional] 
**links** | **str** |  | [optional] 
**published** | **str** |  | [optional] 
**published_parsed** | **str** |  | [optional] 
**source** | **str** |  | [optional] 
**sub_articles** | **str** |  | [optional] 
**summary** | **str** |  | [optional] 
**summary_detail** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**title_detail** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.news200_response_entries_inner import News200ResponseEntriesInner

# TODO update the JSON string below
json = "{}"
# create an instance of News200ResponseEntriesInner from a JSON string
news200_response_entries_inner_instance = News200ResponseEntriesInner.from_json(json)
# print the JSON string representation of the object
print(News200ResponseEntriesInner.to_json())

# convert the object into a dict
news200_response_entries_inner_dict = news200_response_entries_inner_instance.to_dict()
# create an instance of News200ResponseEntriesInner from a dict
news200_response_entries_inner_from_dict = News200ResponseEntriesInner.from_dict(news200_response_entries_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


