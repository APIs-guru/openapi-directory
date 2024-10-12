# CrawlOrphanURLs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** |  | 
**visits** | **int** |  | 

## Example

```python
from openapi_client.models.crawl_orphan_urls import CrawlOrphanURLs

# TODO update the JSON string below
json = "{}"
# create an instance of CrawlOrphanURLs from a JSON string
crawl_orphan_urls_instance = CrawlOrphanURLs.from_json(json)
# print the JSON string representation of the object
print(CrawlOrphanURLs.to_json())

# convert the object into a dict
crawl_orphan_urls_dict = crawl_orphan_urls_instance.to_dict()
# create an instance of CrawlOrphanURLs from a dict
crawl_orphan_urls_from_dict = CrawlOrphanURLs.from_dict(crawl_orphan_urls_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


