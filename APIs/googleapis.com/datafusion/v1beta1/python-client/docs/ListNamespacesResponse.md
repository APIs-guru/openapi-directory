# ListNamespacesResponse

List namespaces response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespaces** | [**List[Namespace]**](Namespace.md) | List of namespaces | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_namespaces_response import ListNamespacesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNamespacesResponse from a JSON string
list_namespaces_response_instance = ListNamespacesResponse.from_json(json)
# print the JSON string representation of the object
print(ListNamespacesResponse.to_json())

# convert the object into a dict
list_namespaces_response_dict = list_namespaces_response_instance.to_dict()
# create an instance of ListNamespacesResponse from a dict
list_namespaces_response_from_dict = ListNamespacesResponse.from_dict(list_namespaces_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


