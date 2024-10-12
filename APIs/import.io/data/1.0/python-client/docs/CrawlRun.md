# CrawlRun


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extractor_id** | **str** |  | [optional] 
**failed_url_count** | **int** |  | [optional] 
**guid** | **str** |  | [optional] 
**row_count** | **int** |  | [optional] 
**runtime_config_id** | **str** |  | [optional] 
**started_at** | **int** |  | [optional] 
**state** | **str** |  | [optional] 
**stopped_at** | **int** |  | [optional] 
**success_url_count** | **int** |  | [optional] 
**total_url_count** | **int** |  | [optional] 
**url_list_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.crawl_run import CrawlRun

# TODO update the JSON string below
json = "{}"
# create an instance of CrawlRun from a JSON string
crawl_run_instance = CrawlRun.from_json(json)
# print the JSON string representation of the object
print(CrawlRun.to_json())

# convert the object into a dict
crawl_run_dict = crawl_run_instance.to_dict()
# create an instance of CrawlRun from a dict
crawl_run_from_dict = CrawlRun.from_dict(crawl_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


