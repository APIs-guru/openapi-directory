# WmxSitemap

Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | [**List[WmxSitemapContent]**](WmxSitemapContent.md) | The various content types in the sitemap. | [optional] 
**errors** | **str** | Number of errors in the sitemap. These are issues with the sitemap itself that need to be fixed before it can be processed correctly. | [optional] 
**is_pending** | **bool** | If true, the sitemap has not been processed. | [optional] 
**is_sitemaps_index** | **bool** | If true, the sitemap is a collection of sitemaps. | [optional] 
**last_downloaded** | **str** | Date &amp; time in which this sitemap was last downloaded. Date format is in RFC 3339 format (yyyy-mm-dd). | [optional] 
**last_submitted** | **str** | Date &amp; time in which this sitemap was submitted. Date format is in RFC 3339 format (yyyy-mm-dd). | [optional] 
**path** | **str** | The url of the sitemap. | [optional] 
**type** | **str** | The type of the sitemap. For example: &#x60;rssFeed&#x60;. | [optional] 
**warnings** | **str** | Number of warnings for the sitemap. These are generally non-critical issues with URLs in the sitemaps. | [optional] 

## Example

```python
from openapi_client.models.wmx_sitemap import WmxSitemap

# TODO update the JSON string below
json = "{}"
# create an instance of WmxSitemap from a JSON string
wmx_sitemap_instance = WmxSitemap.from_json(json)
# print the JSON string representation of the object
print(WmxSitemap.to_json())

# convert the object into a dict
wmx_sitemap_dict = wmx_sitemap_instance.to_dict()
# create an instance of WmxSitemap from a dict
wmx_sitemap_from_dict = WmxSitemap.from_dict(wmx_sitemap_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


