# SearchCount

Represent a Search Count Result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **datetime** | The end time of the bucket. | 
**start** | **datetime** | The start time of the bucket. | 
**tweet_count** | **int** | The count for the bucket. | 

## Example

```python
from openapi_client.models.search_count import SearchCount

# TODO update the JSON string below
json = "{}"
# create an instance of SearchCount from a JSON string
search_count_instance = SearchCount.from_json(json)
# print the JSON string representation of the object
print(SearchCount.to_json())

# convert the object into a dict
search_count_dict = search_count_instance.to_dict()
# create an instance of SearchCount from a dict
search_count_from_dict = SearchCount.from_dict(search_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


