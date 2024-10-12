# SearchInstancesResponse

The instances matching the query based on the input. May be empty or null.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | If returned, this means that current results represent a partial result. Continuation token allows to get the next page of results. To get the next page of query results, send the same request with continuation token parameter in \&quot;x-ms-continuation\&quot; HTTP header. | [optional] [readonly] 
**hit_count** | **int** | Total number of instances matching the query based on the input. | [optional] [readonly] 
**hits** | [**List[InstanceHit]**](InstanceHit.md) | The list of instances matching the query based on the input. May be empty. | [optional] [readonly] 

## Example

```python
from openapi_client.models.search_instances_response import SearchInstancesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchInstancesResponse from a JSON string
search_instances_response_instance = SearchInstancesResponse.from_json(json)
# print the JSON string representation of the object
print(SearchInstancesResponse.to_json())

# convert the object into a dict
search_instances_response_dict = search_instances_response_instance.to_dict()
# create an instance of SearchInstancesResponse from a dict
search_instances_response_from_dict = SearchInstancesResponse.from_dict(search_instances_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


