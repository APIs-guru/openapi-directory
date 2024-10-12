# NamespaceResource

Description of a namespace resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**NamespaceProperties**](NamespaceProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**location** | **str** | Resource location. | 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.namespace_resource import NamespaceResource

# TODO update the JSON string below
json = "{}"
# create an instance of NamespaceResource from a JSON string
namespace_resource_instance = NamespaceResource.from_json(json)
# print the JSON string representation of the object
print(NamespaceResource.to_json())

# convert the object into a dict
namespace_resource_dict = namespace_resource_instance.to_dict()
# create an instance of NamespaceResource from a dict
namespace_resource_from_dict = NamespaceResource.from_dict(namespace_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


