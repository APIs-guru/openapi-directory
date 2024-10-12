# RelayNamespaceListResult

The response of the List Namespace operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of Namespaces | [optional] 
**value** | [**List[RelayNamespace]**](RelayNamespace.md) | Result of the List Namespace operation. | [optional] 

## Example

```python
from openapi_client.models.relay_namespace_list_result import RelayNamespaceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RelayNamespaceListResult from a JSON string
relay_namespace_list_result_instance = RelayNamespaceListResult.from_json(json)
# print the JSON string representation of the object
print(RelayNamespaceListResult.to_json())

# convert the object into a dict
relay_namespace_list_result_dict = relay_namespace_list_result_instance.to_dict()
# create an instance of RelayNamespaceListResult from a dict
relay_namespace_list_result_from_dict = RelayNamespaceListResult.from_dict(relay_namespace_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


