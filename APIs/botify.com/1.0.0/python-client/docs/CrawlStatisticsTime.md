# CrawlStatisticsTime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_delay** | [**List[CrawlStatisticsTimePoint]**](CrawlStatisticsTimePoint.md) |  | 
**avg_size** | [**List[CrawlStatisticsTimePoint]**](CrawlStatisticsTimePoint.md) |  | 
**frequency** | **str** |  | 
**http_code_2xx** | [**List[CrawlStatisticsTimePoint]**](CrawlStatisticsTimePoint.md) |  | 
**http_code_3xx** | [**List[CrawlStatisticsTimePoint]**](CrawlStatisticsTimePoint.md) |  | 
**http_code_4xx** | [**List[CrawlStatisticsTimePoint]**](CrawlStatisticsTimePoint.md) |  | 
**http_code_5xx** | [**List[CrawlStatisticsTimePoint]**](CrawlStatisticsTimePoint.md) |  | 
**http_code_xxx** | [**List[CrawlStatisticsTimePoint]**](CrawlStatisticsTimePoint.md) |  | 
**last_update_date** | **datetime** |  | 
**new_urls** | [**List[CrawlStatisticsTimePoint]**](CrawlStatisticsTimePoint.md) |  | 

## Example

```python
from openapi_client.models.crawl_statistics_time import CrawlStatisticsTime

# TODO update the JSON string below
json = "{}"
# create an instance of CrawlStatisticsTime from a JSON string
crawl_statistics_time_instance = CrawlStatisticsTime.from_json(json)
# print the JSON string representation of the object
print(CrawlStatisticsTime.to_json())

# convert the object into a dict
crawl_statistics_time_dict = crawl_statistics_time_instance.to_dict()
# create an instance of CrawlStatisticsTime from a dict
crawl_statistics_time_from_dict = CrawlStatisticsTime.from_dict(crawl_statistics_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


