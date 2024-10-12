# Page

A page in a presentation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**layout_properties** | [**LayoutProperties**](LayoutProperties.md) |  | [optional] 
**master_properties** | [**MasterProperties**](MasterProperties.md) |  | [optional] 
**notes_properties** | [**NotesProperties**](NotesProperties.md) |  | [optional] 
**object_id** | **str** | The object ID for this page. Object IDs used by Page and PageElement share the same namespace. | [optional] 
**page_elements** | [**List[PageElement]**](PageElement.md) | The page elements rendered on the page. | [optional] 
**page_properties** | [**PageProperties**](PageProperties.md) |  | [optional] 
**page_type** | **str** | The type of the page. | [optional] 
**revision_id** | **str** | Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn&#39;t changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes. | [optional] 
**slide_properties** | [**SlideProperties**](SlideProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.page import Page

# TODO update the JSON string below
json = "{}"
# create an instance of Page from a JSON string
page_instance = Page.from_json(json)
# print the JSON string representation of the object
print(Page.to_json())

# convert the object into a dict
page_dict = page_instance.to_dict()
# create an instance of Page from a dict
page_from_dict = Page.from_dict(page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


