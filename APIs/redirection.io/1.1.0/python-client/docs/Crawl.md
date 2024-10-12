# Crawl



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived** | **bool** |  | [optional] [readonly] 
**author** | [**User**](User.md) |  | [optional] 
**created_at** | **datetime** |  | [optional] [readonly] 
**current_concurrency** | **int** |  | [optional] 
**error** | **str** |  | [optional] [readonly] 
**finished_at** | **datetime** |  | [optional] [readonly] 
**first_url** | **str** |  | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 
**marking** | **List[str]** |  | [optional] 
**stats** | **List[str]** |  | [optional] 
**trigger** | **str** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.crawl import Crawl

# TODO update the JSON string below
json = "{}"
# create an instance of Crawl from a JSON string
crawl_instance = Crawl.from_json(json)
# print the JSON string representation of the object
print(Crawl.to_json())

# convert the object into a dict
crawl_dict = crawl_instance.to_dict()
# create an instance of Crawl from a dict
crawl_from_dict = Crawl.from_dict(crawl_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


