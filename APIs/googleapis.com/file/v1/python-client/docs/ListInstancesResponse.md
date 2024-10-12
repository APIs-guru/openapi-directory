# ListInstancesResponse

ListInstancesResponse is the result of ListInstancesRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instances** | [**List[Instance]**](Instance.md) | A list of instances in the project for the specified location. If the &#x60;{location}&#x60; value in the request is \&quot;-\&quot;, the response contains a list of instances from all locations. If any location is unreachable, the response will only return instances in reachable locations and the \&quot;unreachable\&quot; field will be populated with a list of unreachable locations. | [optional] 
**next_page_token** | **str** | The token you can use to retrieve the next page of results. Not returned if there are no more results in the list. | [optional] 
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


