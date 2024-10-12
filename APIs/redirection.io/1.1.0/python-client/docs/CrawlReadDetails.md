# CrawlReadDetails



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived** | **bool** |  | [optional] [readonly] 
**author** | [**UserReadDetails**](UserReadDetails.md) |  | [optional] 
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
from openapi_client.models.crawl_read_details import CrawlReadDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CrawlReadDetails from a JSON string
crawl_read_details_instance = CrawlReadDetails.from_json(json)
# print the JSON string representation of the object
print(CrawlReadDetails.to_json())

# convert the object into a dict
crawl_read_details_dict = crawl_read_details_instance.to_dict()
# create an instance of CrawlReadDetails from a dict
crawl_read_details_from_dict = CrawlReadDetails.from_dict(crawl_read_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


