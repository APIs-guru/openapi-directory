# PagecountsProjectItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_site** | **str** |  | [optional] 
**count** | **int** |  | [optional] 
**granularity** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**timestamp** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.pagecounts_project_items_inner import PagecountsProjectItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PagecountsProjectItemsInner from a JSON string
pagecounts_project_items_inner_instance = PagecountsProjectItemsInner.from_json(json)
# print the JSON string representation of the object
print(PagecountsProjectItemsInner.to_json())

# convert the object into a dict
pagecounts_project_items_inner_dict = pagecounts_project_items_inner_instance.to_dict()
# create an instance of PagecountsProjectItemsInner from a dict
pagecounts_project_items_inner_from_dict = PagecountsProjectItemsInner.from_dict(pagecounts_project_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


