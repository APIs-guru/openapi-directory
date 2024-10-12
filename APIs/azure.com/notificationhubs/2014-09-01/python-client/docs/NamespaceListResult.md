# NamespaceListResult

The response of the List Namespace operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets link to the next set of results. Not empty if Value contains incomplete list of Namespaces | [optional] 
**value** | [**List[NamespaceResource]**](NamespaceResource.md) | Gets or sets result of the List Namespace operation. | [optional] 

## Example

```python
from openapi_client.models.namespace_list_result import NamespaceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of NamespaceListResult from a JSON string
namespace_list_result_instance = NamespaceListResult.from_json(json)
# print the JSON string representation of the object
print(NamespaceListResult.to_json())

# convert the object into a dict
namespace_list_result_dict = namespace_list_result_instance.to_dict()
# create an instance of NamespaceListResult from a dict
namespace_list_result_from_dict = NamespaceListResult.from_dict(namespace_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


