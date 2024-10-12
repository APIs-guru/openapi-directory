# Crawl200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer** | **str** |  | [optional] 
**results** | **List[str]** |  | [optional] 
**total** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.crawl200_response import Crawl200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Crawl200Response from a JSON string
crawl200_response_instance = Crawl200Response.from_json(json)
# print the JSON string representation of the object
print(Crawl200Response.to_json())

# convert the object into a dict
crawl200_response_dict = crawl200_response_instance.to_dict()
# create an instance of Crawl200Response from a dict
crawl200_response_from_dict = Crawl200Response.from_dict(crawl200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


