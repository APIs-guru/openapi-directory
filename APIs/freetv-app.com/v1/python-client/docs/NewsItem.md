# NewsItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **str** |  | [optional] 
**ref** | **str** |  | [optional] 
**subtitle** | **str** |  | [optional] 
**thumbnail** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.news_item import NewsItem

# TODO update the JSON string below
json = "{}"
# create an instance of NewsItem from a JSON string
news_item_instance = NewsItem.from_json(json)
# print the JSON string representation of the object
print(NewsItem.to_json())

# convert the object into a dict
news_item_dict = news_item_instance.to_dict()
# create an instance of NewsItem from a dict
news_item_from_dict = NewsItem.from_dict(news_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


