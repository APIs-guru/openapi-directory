# CrawlStatisticsUrls


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** |  | 
**var_date** | **str** |  | 
**delay_first_byte** | **int** |  | 
**delay_last_byte** | **int** |  | 
**gzip** | **bool** |  | 
**http** | **int** |  | 
**length** | **int** |  | 
**redirects_to** | **str** |  | [optional] 
**url** | **str** |  | 

## Example

```python
from openapi_client.models.crawl_statistics_urls import CrawlStatisticsUrls

# TODO update the JSON string below
json = "{}"
# create an instance of CrawlStatisticsUrls from a JSON string
crawl_statistics_urls_instance = CrawlStatisticsUrls.from_json(json)
# print the JSON string representation of the object
print(CrawlStatisticsUrls.to_json())

# convert the object into a dict
crawl_statistics_urls_dict = crawl_statistics_urls_instance.to_dict()
# create an instance of CrawlStatisticsUrls from a dict
crawl_statistics_urls_from_dict = CrawlStatisticsUrls.from_dict(crawl_statistics_urls_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


