# ListNamespacesResponse

Response to ListNamespacesRequest that contains all the project's namespaces.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespaces** | [**List[Namespace]**](Namespace.md) | The attachments that corresponded to the request params. | [optional] 

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


