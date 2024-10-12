# UrlsQuery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **List[str]** |  | [optional] 
**filters** | **object** |  | [optional] 
**sort** | **List[object]** |  | [optional] 

## Example

```python
from openapi_client.models.urls_query import UrlsQuery

# TODO update the JSON string below
json = "{}"
# create an instance of UrlsQuery from a JSON string
urls_query_instance = UrlsQuery.from_json(json)
# print the JSON string representation of the object
print(UrlsQuery.to_json())

# convert the object into a dict
urls_query_dict = urls_query_instance.to_dict()
# create an instance of UrlsQuery from a dict
urls_query_from_dict = UrlsQuery.from_dict(urls_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


