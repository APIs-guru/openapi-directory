# SearchQuery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria** | [**List[Criteria]**](Criteria.md) | Optional search criteria. All criteria are ANDed together. | [optional] 
**end_date** | **str** | The end date (inclusive) &#39;2015-04-22T10:03:19&#39; in the timezone of your merchant account. | 
**end_row** | **float** | Used to page the results. 1-based. This should always be 1 larger than start_row. | 
**name** | **str** | Only accepts 2 values. Can be either &#39;Search&#39; for all fields or &#39;TransHistoryMinimal&#39; for a subset of the fields returned in the results. | 
**start_date** | **str** | The start date (inclusive) &#39;2015-04-22T10:03:19&#39; in the timezone of your merchant account. | 
**start_row** | **float** | Used to page the results. 1-based | 

## Example

```python
from openapi_client.models.search_query import SearchQuery

# TODO update the JSON string below
json = "{}"
# create an instance of SearchQuery from a JSON string
search_query_instance = SearchQuery.from_json(json)
# print the JSON string representation of the object
print(SearchQuery.to_json())

# convert the object into a dict
search_query_dict = search_query_instance.to_dict()
# create an instance of SearchQuery from a dict
search_query_from_dict = SearchQuery.from_dict(search_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


