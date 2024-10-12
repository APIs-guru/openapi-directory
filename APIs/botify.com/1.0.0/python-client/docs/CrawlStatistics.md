# CrawlStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth_current** | **int** |  | 
**last_upd_dt** | **datetime** |  | 
**pages_dones** | **int** |  | 
**pages_dones_2xx** | **int** |  | 
**pages_dones_3xx** | **int** |  | 
**pages_dones_4xx** | **int** |  | 
**pages_dones_5xx** | **int** |  | 
**pages_dones_networkerror** | **int** |  | 
**pages_dones_xxx** | **int** |  | 
**pages_known** | **int** |  | 

## Example

```python
from openapi_client.models.crawl_statistics import CrawlStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of CrawlStatistics from a JSON string
crawl_statistics_instance = CrawlStatistics.from_json(json)
# print the JSON string representation of the object
print(CrawlStatistics.to_json())

# convert the object into a dict
crawl_statistics_dict = crawl_statistics_instance.to_dict()
# create an instance of CrawlStatistics from a dict
crawl_statistics_from_dict = CrawlStatistics.from_dict(crawl_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


