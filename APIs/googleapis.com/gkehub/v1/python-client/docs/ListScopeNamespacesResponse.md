# ListScopeNamespacesResponse

List of fleet namespaces.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to request the next page of resources from the &#x60;ListNamespaces&#x60; method. The value of an empty string means that there are no more resources to return. | [optional] 
**scope_namespaces** | [**List[Namespace]**](Namespace.md) | The list of fleet namespaces | [optional] 

## Example

```python
from openapi_client.models.list_scope_namespaces_response import ListScopeNamespacesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListScopeNamespacesResponse from a JSON string
list_scope_namespaces_response_instance = ListScopeNamespacesResponse.from_json(json)
# print the JSON string representation of the object
print(ListScopeNamespacesResponse.to_json())

# convert the object into a dict
list_scope_namespaces_response_dict = list_scope_namespaces_response_instance.to_dict()
# create an instance of ListScopeNamespacesResponse from a dict
list_scope_namespaces_response_from_dict = ListScopeNamespacesResponse.from_dict(list_scope_namespaces_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


