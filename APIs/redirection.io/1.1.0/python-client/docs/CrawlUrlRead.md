# CrawlUrlRead



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**curl_info** | **object** |  | [optional] 
**depth** | **object** |  | [optional] 
**description** | **object** |  | [optional] 
**error** | **object** |  | [optional] 
**id** | **object** |  | [optional] 
**redirect_url** | **object** |  | [optional] 
**status_code** | **object** |  | [optional] 
**title** | **object** |  | [optional] 
**url** | **object** |  | [optional] 
**urls_to** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.crawl_url_read import CrawlUrlRead

# TODO update the JSON string below
json = "{}"
# create an instance of CrawlUrlRead from a JSON string
crawl_url_read_instance = CrawlUrlRead.from_json(json)
# print the JSON string representation of the object
print(CrawlUrlRead.to_json())

# convert the object into a dict
crawl_url_read_dict = crawl_url_read_instance.to_dict()
# create an instance of CrawlUrlRead from a dict
crawl_url_read_from_dict = CrawlUrlRead.from_dict(crawl_url_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


