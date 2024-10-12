# InboxItemsInnerSite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliases** | **List[object]** |  | [optional] 
**api_site_parameter** | **str** |  | [optional] 
**audience** | **str** |  | [optional] 
**closed_beta_date** | **int** |  | [optional] 
**favicon_url** | **str** |  | [optional] 
**high_resolution_icon_url** | **str** |  | [optional] 
**icon_url** | **str** |  | [optional] 
**launch_date** | **int** |  | [optional] 
**logo_url** | **str** |  | [optional] 
**markdown_extensions** | **List[object]** |  | [optional] 
**name** | **str** |  | [optional] 
**open_beta_date** | **int** |  | [optional] 
**related_sites** | **List[object]** |  | [optional] 
**site_state** | **str** |  | [optional] 
**site_type** | **str** |  | [optional] 
**site_url** | **str** |  | [optional] 
**styling** | [**InboxItemsInnerSiteStyling**](InboxItemsInnerSiteStyling.md) |  | [optional] 
**twitter_account** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.inbox_items_inner_site import InboxItemsInnerSite

# TODO update the JSON string below
json = "{}"
# create an instance of InboxItemsInnerSite from a JSON string
inbox_items_inner_site_instance = InboxItemsInnerSite.from_json(json)
# print the JSON string representation of the object
print(InboxItemsInnerSite.to_json())

# convert the object into a dict
inbox_items_inner_site_dict = inbox_items_inner_site_instance.to_dict()
# create an instance of InboxItemsInnerSite from a dict
inbox_items_inner_site_from_dict = InboxItemsInnerSite.from_dict(inbox_items_inner_site_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


