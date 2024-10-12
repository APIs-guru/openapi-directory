# CrawlWrite



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concurrency** | **int** |  | 
**first_url** | **object** |  | 
**headers** | **List[str]** |  | [optional] 
**http_basic_password** | **object** |  | [optional] 
**http_basic_user** | **object** |  | [optional] 
**max_depth** | **int** |  | 
**max_duration** | **int** |  | 
**max_urls** | **int** |  | 
**other_domains** | **List[str]** |  | [optional] 
**project** | **str** |  | 
**ssl_checking_disabled** | **bool** |  | 
**subdomain_included** | **bool** |  | 
**user_agent** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.crawl_write import CrawlWrite

# TODO update the JSON string below
json = "{}"
# create an instance of CrawlWrite from a JSON string
crawl_write_instance = CrawlWrite.from_json(json)
# print the JSON string representation of the object
print(CrawlWrite.to_json())

# convert the object into a dict
crawl_write_dict = crawl_write_instance.to_dict()
# create an instance of CrawlWrite from a dict
crawl_write_from_dict = CrawlWrite.from_dict(crawl_write_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


