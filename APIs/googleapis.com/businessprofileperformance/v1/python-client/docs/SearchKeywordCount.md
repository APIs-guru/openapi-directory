# SearchKeywordCount

Represents a single search keyword and its value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insights_value** | [**InsightsValue**](InsightsValue.md) |  | [optional] 
**search_keyword** | **str** | The lower-cased string that the user entered. | [optional] 

## Example

```python
from openapi_client.models.search_keyword_count import SearchKeywordCount

# TODO update the JSON string below
json = "{}"
# create an instance of SearchKeywordCount from a JSON string
search_keyword_count_instance = SearchKeywordCount.from_json(json)
# print the JSON string representation of the object
print(SearchKeywordCount.to_json())

# convert the object into a dict
search_keyword_count_dict = search_keyword_count_instance.to_dict()
# create an instance of SearchKeywordCount from a dict
search_keyword_count_from_dict = SearchKeywordCount.from_dict(search_keyword_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


