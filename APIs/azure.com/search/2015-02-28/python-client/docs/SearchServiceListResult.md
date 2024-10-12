# SearchServiceListResult

Response containing a list of Azure Search services for a given resource group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[SearchServiceResource]**](SearchServiceResource.md) | The Search services in the resource group. | [optional] [readonly] 

## Example

```python
from openapi_client.models.search_service_list_result import SearchServiceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SearchServiceListResult from a JSON string
search_service_list_result_instance = SearchServiceListResult.from_json(json)
# print the JSON string representation of the object
print(SearchServiceListResult.to_json())

# convert the object into a dict
search_service_list_result_dict = search_service_list_result_instance.to_dict()
# create an instance of SearchServiceListResult from a dict
search_service_list_result_from_dict = SearchServiceListResult.from_dict(search_service_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


