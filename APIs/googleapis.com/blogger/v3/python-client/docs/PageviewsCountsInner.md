# PageviewsCountsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Count of page views for the given time range. | [optional] 
**time_range** | **str** | Time range the given count applies to. | [optional] 

## Example

```python
from openapi_client.models.pageviews_counts_inner import PageviewsCountsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PageviewsCountsInner from a JSON string
pageviews_counts_inner_instance = PageviewsCountsInner.from_json(json)
# print the JSON string representation of the object
print(PageviewsCountsInner.to_json())

# convert the object into a dict
pageviews_counts_inner_dict = pageviews_counts_inner_instance.to_dict()
# create an instance of PageviewsCountsInner from a dict
pageviews_counts_inner_from_dict = PageviewsCountsInner.from_dict(pageviews_counts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


