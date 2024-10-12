# Page

Representation of a page object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body_json** | **str** | For JSON pages, the JSON body | [optional] 
**body_markdown** | **str** | The text (in markdown) of the ad (required) | [optional] 
**description** | **str** | For internal use, helps similar pages from one another | 
**is_top_level_path** | **bool** | If true, the page is available at &#39;/{slug}&#39; instead of &#39;/page/{slug}&#39;, use with caution | [optional] 
**slug** | **str** | Used to link to this page in URLs, must be unique and URL-safe | 
**social_image** | **object** |  | [optional] 
**template** | **str** | Controls what kind of layout the page is rendered in | [default to 'contained']
**title** | **str** | Title of the page | 

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


