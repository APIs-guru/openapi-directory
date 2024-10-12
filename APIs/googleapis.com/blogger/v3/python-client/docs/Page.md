# Page


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**PageAuthor**](PageAuthor.md) |  | [optional] 
**blog** | [**PageBlog**](PageBlog.md) |  | [optional] 
**content** | **str** | The body content of this Page, in HTML. | [optional] 
**etag** | **str** | Etag of the resource. | [optional] 
**id** | **str** | The identifier for this resource. | [optional] 
**kind** | **str** | The kind of this entity. Always blogger#page. | [optional] 
**published** | **str** | RFC 3339 date-time when this Page was published. | [optional] 
**self_link** | **str** | The API REST URL to fetch this resource from. | [optional] 
**status** | **str** | The status of the page for admin resources (either LIVE or DRAFT). | [optional] 
**title** | **str** | The title of this entity. This is the name displayed in the Admin user interface. | [optional] 
**trashed** | **str** | RFC 3339 date-time when this Page was trashed. | [optional] 
**updated** | **str** | RFC 3339 date-time when this Page was last updated. | [optional] 
**url** | **str** | The URL that this Page is displayed at. | [optional] 

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


