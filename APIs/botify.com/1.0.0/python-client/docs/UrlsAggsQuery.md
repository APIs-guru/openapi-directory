# UrlsAggsQuery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggs** | **List[object]** |  | [optional] 
**filters** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.urls_aggs_query import UrlsAggsQuery

# TODO update the JSON string below
json = "{}"
# create an instance of UrlsAggsQuery from a JSON string
urls_aggs_query_instance = UrlsAggsQuery.from_json(json)
# print the JSON string representation of the object
print(UrlsAggsQuery.to_json())

# convert the object into a dict
urls_aggs_query_dict = urls_aggs_query_instance.to_dict()
# create an instance of UrlsAggsQuery from a dict
urls_aggs_query_from_dict = UrlsAggsQuery.from_dict(urls_aggs_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


