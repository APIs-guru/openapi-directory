# NamespaceUpdateParameter

Parameters supplied to the Patch/update Namespace operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.namespace_update_parameter import NamespaceUpdateParameter

# TODO update the JSON string below
json = "{}"
# create an instance of NamespaceUpdateParameter from a JSON string
namespace_update_parameter_instance = NamespaceUpdateParameter.from_json(json)
# print the JSON string representation of the object
print(NamespaceUpdateParameter.to_json())

# convert the object into a dict
namespace_update_parameter_dict = namespace_update_parameter_instance.to_dict()
# create an instance of NamespaceUpdateParameter from a dict
namespace_update_parameter_from_dict = NamespaceUpdateParameter.from_dict(namespace_update_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


