# GetGanalyticsOrphanURLs200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] [readonly] 
**next** | **str** |  | [optional] [readonly] 
**page** | **int** |  | [optional] [readonly] 
**previous** | **str** |  | [optional] [readonly] 
**results** | [**List[CrawlOrphanURLs]**](CrawlOrphanURLs.md) |  | [optional] [readonly] 
**size** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.get_ganalytics_orphan_urls200_response import GetGanalyticsOrphanURLs200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetGanalyticsOrphanURLs200Response from a JSON string
get_ganalytics_orphan_urls200_response_instance = GetGanalyticsOrphanURLs200Response.from_json(json)
# print the JSON string representation of the object
print(GetGanalyticsOrphanURLs200Response.to_json())

# convert the object into a dict
get_ganalytics_orphan_urls200_response_dict = get_ganalytics_orphan_urls200_response_instance.to_dict()
# create an instance of GetGanalyticsOrphanURLs200Response from a dict
get_ganalytics_orphan_urls200_response_from_dict = GetGanalyticsOrphanURLs200Response.from_dict(get_ganalytics_orphan_urls200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


