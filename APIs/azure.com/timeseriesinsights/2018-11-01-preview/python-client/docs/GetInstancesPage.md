# GetInstancesPage

Partial list of time series instances returned in a single request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | If returned, this means that current results represent a partial result. Continuation token allows to get the next page of results. To get the next page of query results, send the same request with continuation token parameter in \&quot;x-ms-continuation\&quot; HTTP header. | [optional] [readonly] 
**instances** | [**List[TimeSeriesInstance]**](TimeSeriesInstance.md) | Partial list of time series instances returned in a single request. Can be empty if server was unable to fill the page in this request, or there is no more objects when continuation token is null. | [optional] [readonly] 

## Example

```python
from openapi_client.models.get_instances_page import GetInstancesPage

# TODO update the JSON string below
json = "{}"
# create an instance of GetInstancesPage from a JSON string
get_instances_page_instance = GetInstancesPage.from_json(json)
# print the JSON string representation of the object
print(GetInstancesPage.to_json())

# convert the object into a dict
get_instances_page_dict = get_instances_page_instance.to_dict()
# create an instance of GetInstancesPage from a dict
get_instances_page_from_dict = GetInstancesPage.from_dict(get_instances_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


