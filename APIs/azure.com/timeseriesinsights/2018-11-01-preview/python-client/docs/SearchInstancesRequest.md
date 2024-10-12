# SearchInstancesRequest

Request to execute a search query against time series instances and return matching time series instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hierarchies** | [**SearchInstancesHierarchiesParameters**](SearchInstancesHierarchiesParameters.md) |  | [optional] 
**instances** | [**SearchInstancesParameters**](SearchInstancesParameters.md) |  | [optional] 
**path** | **List[str]** | Filter on hierarchy path of time series instances. Path is represented as array of string path segments. First element should be hierarchy name. Example: [\&quot;Location\&quot;, \&quot;California\&quot;]. Optional, case sensitive, never empty and can be null. | [optional] 
**search_string** | **str** | Query search string that will be matched to the attributes of time series instances. Example: \&quot;floor 100\&quot;. Case-insensitive, must be present, but can be empty string. | 

## Example

```python
from openapi_client.models.search_instances_request import SearchInstancesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchInstancesRequest from a JSON string
search_instances_request_instance = SearchInstancesRequest.from_json(json)
# print the JSON string representation of the object
print(SearchInstancesRequest.to_json())

# convert the object into a dict
search_instances_request_dict = search_instances_request_instance.to_dict()
# create an instance of SearchInstancesRequest from a dict
search_instances_request_from_dict = SearchInstancesRequest.from_dict(search_instances_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


