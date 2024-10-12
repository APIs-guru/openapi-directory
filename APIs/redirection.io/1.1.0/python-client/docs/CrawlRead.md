# CrawlRead



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived** | **bool** |  | [optional] [readonly] 
**author** | [**UserRead**](UserRead.md) |  | [optional] 
**created_at** | **datetime** |  | [optional] [readonly] 
**error** | **str** |  | [optional] [readonly] 
**finished_at** | **datetime** |  | [optional] [readonly] 
**first_url** | **str** |  | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 
**stats** | **List[str]** |  | [optional] 
**trigger** | **str** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.crawl_read import CrawlRead

# TODO update the JSON string below
json = "{}"
# create an instance of CrawlRead from a JSON string
crawl_read_instance = CrawlRead.from_json(json)
# print the JSON string representation of the object
print(CrawlRead.to_json())

# convert the object into a dict
crawl_read_dict = crawl_read_instance.to_dict()
# create an instance of CrawlRead from a dict
crawl_read_from_dict = CrawlRead.from_dict(crawl_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


