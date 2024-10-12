# SitemapsReportSitemap


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**SitemapsReportSitemapError**](SitemapsReportSitemapError.md) |  | [optional] 
**file_type** | **str** |  | [optional] 
**invalid_urls** | **int** |  | [optional] 
**sitemap_indexes** | **List[str]** |  | [optional] 
**url** | **str** |  | 
**valid_urls** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.sitemaps_report_sitemap import SitemapsReportSitemap

# TODO update the JSON string below
json = "{}"
# create an instance of SitemapsReportSitemap from a JSON string
sitemaps_report_sitemap_instance = SitemapsReportSitemap.from_json(json)
# print the JSON string representation of the object
print(SitemapsReportSitemap.to_json())

# convert the object into a dict
sitemaps_report_sitemap_dict = sitemaps_report_sitemap_instance.to_dict()
# create an instance of SitemapsReportSitemap from a dict
sitemaps_report_sitemap_from_dict = SitemapsReportSitemap.from_dict(sitemaps_report_sitemap_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


