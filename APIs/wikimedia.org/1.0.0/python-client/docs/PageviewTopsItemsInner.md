# PageviewTopsItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** |  | [optional] 
**articles** | [**List[PageviewTopsItemsInnerArticlesInner]**](PageviewTopsItemsInnerArticlesInner.md) |  | [optional] 
**day** | **str** |  | [optional] 
**month** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**year** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.pageview_tops_items_inner import PageviewTopsItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PageviewTopsItemsInner from a JSON string
pageview_tops_items_inner_instance = PageviewTopsItemsInner.from_json(json)
# print the JSON string representation of the object
print(PageviewTopsItemsInner.to_json())

# convert the object into a dict
pageview_tops_items_inner_dict = pageview_tops_items_inner_instance.to_dict()
# create an instance of PageviewTopsItemsInner from a dict
pageview_tops_items_inner_from_dict = PageviewTopsItemsInner.from_dict(pageview_tops_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


