# SitemapsReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**errors** | [**List[SitemapsReportSitemap]**](SitemapsReportSitemap.md) |  | 
**sitemap_indexes** | [**List[SitemapsReportSitemap]**](SitemapsReportSitemap.md) |  | 
**sitemap_only** | [**SitemapsReportOnly**](SitemapsReportOnly.md) |  | 
**sitemaps** | [**List[SitemapsReportSitemap]**](SitemapsReportSitemap.md) |  | 

## Example

```python
from openapi_client.models.sitemaps_report import SitemapsReport

# TODO update the JSON string below
json = "{}"
# create an instance of SitemapsReport from a JSON string
sitemaps_report_instance = SitemapsReport.from_json(json)
# print the JSON string representation of the object
print(SitemapsReport.to_json())

# convert the object into a dict
sitemaps_report_dict = sitemaps_report_instance.to_dict()
# create an instance of SitemapsReport from a dict
sitemaps_report_from_dict = SitemapsReport.from_dict(sitemaps_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


