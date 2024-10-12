# WmxSitemapContent

Information about the various content types in the sitemap.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**indexed** | **str** | The number of URLs from the sitemap that were indexed (of the content type). | [optional] 
**submitted** | **str** | The number of URLs in the sitemap (of the content type). | [optional] 
**type** | **str** | The specific type of content in this sitemap. For example: web. | [optional] 

## Example

```python
from openapi_client.models.wmx_sitemap_content import WmxSitemapContent

# TODO update the JSON string below
json = "{}"
# create an instance of WmxSitemapContent from a JSON string
wmx_sitemap_content_instance = WmxSitemapContent.from_json(json)
# print the JSON string representation of the object
print(WmxSitemapContent.to_json())

# convert the object into a dict
wmx_sitemap_content_dict = wmx_sitemap_content_instance.to_dict()
# create an instance of WmxSitemapContent from a dict
wmx_sitemap_content_from_dict = WmxSitemapContent.from_dict(wmx_sitemap_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


