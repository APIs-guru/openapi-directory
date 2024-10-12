# NamespaceCreateOrUpdateParameters

Parameters supplied to the CreateOrUpdate Namespace operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**NamespaceProperties**](NamespaceProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.namespace_create_or_update_parameters import NamespaceCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of NamespaceCreateOrUpdateParameters from a JSON string
namespace_create_or_update_parameters_instance = NamespaceCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(NamespaceCreateOrUpdateParameters.to_json())

# convert the object into a dict
namespace_create_or_update_parameters_dict = namespace_create_or_update_parameters_instance.to_dict()
# create an instance of NamespaceCreateOrUpdateParameters from a dict
namespace_create_or_update_parameters_from_dict = NamespaceCreateOrUpdateParameters.from_dict(namespace_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


