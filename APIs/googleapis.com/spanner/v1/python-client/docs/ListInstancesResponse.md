# ListInstancesResponse

The response for ListInstances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instances** | [**List[Instance]**](Instance.md) | The list of requested instances. | [optional] 
**next_page_token** | **str** | &#x60;next_page_token&#x60; can be sent in a subsequent ListInstances call to fetch more of the matching instances. | [optional] 
**unreachable** | **List[str]** | The list of unreachable instances. It includes the names of instances whose metadata could not be retrieved within instance_deadline. | [optional] 

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


