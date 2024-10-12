# ListInstancesResponse

Response from ListInstances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instances** | [**List[Instance]**](Instance.md) | The list of instances matching the request filters, up to the requested ListInstancesRequest.pageSize. | [optional] 
**next_page_token** | **str** | If provided, a page token that can look up the next ListInstancesRequest.pageSize results. If empty, the results list is exhausted. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_instances_response import ListInstancesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListInstancesResponse from a JSON string
list_instances_response_instance = ListInstancesResponse.from_json(json)
# print the JSON string representation of the object
print(ListInstancesResponse.to_json())

# convert the object into a dict
list_instances_response_dict = list_instances_response_instance.to_dict()
# create an instance of ListInstancesResponse from a dict
list_instances_response_from_dict = ListInstancesResponse.from_dict(list_instances_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


