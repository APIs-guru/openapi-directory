# ListContainersResponse

List Containers Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container** | [**List[Container]**](Container.md) | All Containers of a GTM Account. | [optional] 
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_containers_response import ListContainersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListContainersResponse from a JSON string
list_containers_response_instance = ListContainersResponse.from_json(json)
# print the JSON string representation of the object
print(ListContainersResponse.to_json())

# convert the object into a dict
list_containers_response_dict = list_containers_response_instance.to_dict()
# create an instance of ListContainersResponse from a dict
list_containers_response_from_dict = ListContainersResponse.from_dict(list_containers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


