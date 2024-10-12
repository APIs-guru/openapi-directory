# NamespacePatchParameters

Parameters supplied to the Patch Namespace operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.namespace_patch_parameters import NamespacePatchParameters

# TODO update the JSON string below
json = "{}"
# create an instance of NamespacePatchParameters from a JSON string
namespace_patch_parameters_instance = NamespacePatchParameters.from_json(json)
# print the JSON string representation of the object
print(NamespacePatchParameters.to_json())

# convert the object into a dict
namespace_patch_parameters_dict = namespace_patch_parameters_instance.to_dict()
# create an instance of NamespacePatchParameters from a dict
namespace_patch_parameters_from_dict = NamespacePatchParameters.from_dict(namespace_patch_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


