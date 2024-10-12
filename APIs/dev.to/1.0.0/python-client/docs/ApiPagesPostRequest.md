# ApiPagesPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body_json** | **str** | For JSON pages, the JSON body | [optional] 
**body_markdown** | **str** | The text (in markdown) of the ad (required) | [optional] 
**description** | **str** | For internal use, helps similar pages from one another | [optional] 
**is_top_level_path** | **bool** | If true, the page is available at &#39;/{slug}&#39; instead of &#39;/page/{slug}&#39;, use with caution | [optional] 
**slug** | **str** | Used to link to this page in URLs, must be unique and URL-safe | [optional] 
**template** | **str** | Controls what kind of layout the page is rendered in | [optional] [default to 'contained']
**title** | **str** | Title of the page | [optional] 

## Example

```python
from openapi_client.models.api_pages_post_request import ApiPagesPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiPagesPostRequest from a JSON string
api_pages_post_request_instance = ApiPagesPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiPagesPostRequest.to_json())

# convert the object into a dict
api_pages_post_request_dict = api_pages_post_request_instance.to_dict()
# create an instance of ApiPagesPostRequest from a dict
api_pages_post_request_from_dict = ApiPagesPostRequest.from_dict(api_pages_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


