# SBNamespaceListResult

The response of the List Namespace operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of Namespaces. | [optional] 
**value** | [**List[SBNamespace]**](SBNamespace.md) | Result of the List Namespace operation. | [optional] 

## Example

```python
from openapi_client.models.sb_namespace_list_result import SBNamespaceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SBNamespaceListResult from a JSON string
sb_namespace_list_result_instance = SBNamespaceListResult.from_json(json)
# print the JSON string representation of the object
print(SBNamespaceListResult.to_json())

# convert the object into a dict
sb_namespace_list_result_dict = sb_namespace_list_result_instance.to_dict()
# create an instance of SBNamespaceListResult from a dict
sb_namespace_list_result_from_dict = SBNamespaceListResult.from_dict(sb_namespace_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


