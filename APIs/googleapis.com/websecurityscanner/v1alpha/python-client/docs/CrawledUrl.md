# CrawledUrl

A CrawledUrl resource represents a URL that was crawled during a ScanRun. Web Security Scanner Service crawls the web applications, following all links within the scope of sites, to find the URLs to test against.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Output only. The body of the request that was used to visit the URL. | [optional] 
**http_method** | **str** | Output only. The http method of the request that was used to visit the URL, in uppercase. | [optional] 
**url** | **str** | Output only. The URL that was crawled. | [optional] 

## Example

```python
from openapi_client.models.crawled_url import CrawledUrl

# TODO update the JSON string below
json = "{}"
# create an instance of CrawledUrl from a JSON string
crawled_url_instance = CrawledUrl.from_json(json)
# print the JSON string representation of the object
print(CrawledUrl.to_json())

# convert the object into a dict
crawled_url_dict = crawled_url_instance.to_dict()
# create an instance of CrawledUrl from a dict
crawled_url_from_dict = CrawledUrl.from_dict(crawled_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


