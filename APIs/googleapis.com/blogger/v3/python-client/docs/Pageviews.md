# Pageviews


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blog_id** | **str** | Blog Id. | [optional] 
**counts** | [**List[PageviewsCountsInner]**](PageviewsCountsInner.md) | The container of posts in this blog. | [optional] 
**kind** | **str** | The kind of this entry. Always blogger#page_views. | [optional] 

## Example

```python
from openapi_client.models.pageviews import Pageviews

# TODO update the JSON string below
json = "{}"
# create an instance of Pageviews from a JSON string
pageviews_instance = Pageviews.from_json(json)
# print the JSON string representation of the object
print(Pageviews.to_json())

# convert the object into a dict
pageviews_dict = pageviews_instance.to_dict()
# create an instance of Pageviews from a dict
pageviews_from_dict = Pageviews.from_dict(pageviews_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


