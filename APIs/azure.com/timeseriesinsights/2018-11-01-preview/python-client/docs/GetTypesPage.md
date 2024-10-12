# GetTypesPage

Partial list of time series types returned in a single request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | If returned, this means that current results represent a partial result. Continuation token allows to get the next page of results. To get the next page of query results, send the same request with continuation token parameter in \&quot;x-ms-continuation\&quot; HTTP header. | [optional] [readonly] 
**types** | [**List[TimeSeriesType]**](TimeSeriesType.md) | Partial list of time series types returned in a single request. Can be empty if server was unable to fill the page with more types in this request, or there is no more types when continuation token is null. | [optional] [readonly] 

## Example

```python
from openapi_client.models.get_types_page import GetTypesPage

# TODO update the JSON string below
json = "{}"
# create an instance of GetTypesPage from a JSON string
get_types_page_instance = GetTypesPage.from_json(json)
# print the JSON string representation of the object
print(GetTypesPage.to_json())

# convert the object into a dict
get_types_page_dict = get_types_page_instance.to_dict()
# create an instance of GetTypesPage from a dict
get_types_page_from_dict = GetTypesPage.from_dict(get_types_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


