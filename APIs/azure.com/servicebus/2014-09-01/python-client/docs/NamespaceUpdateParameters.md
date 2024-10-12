# NamespaceUpdateParameters

Parameters supplied to the Patch Namespace operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.namespace_update_parameters import NamespaceUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of NamespaceUpdateParameters from a JSON string
namespace_update_parameters_instance = NamespaceUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(NamespaceUpdateParameters.to_json())

# convert the object into a dict
namespace_update_parameters_dict = namespace_update_parameters_instance.to_dict()
# create an instance of NamespaceUpdateParameters from a dict
namespace_update_parameters_from_dict = NamespaceUpdateParameters.from_dict(namespace_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


