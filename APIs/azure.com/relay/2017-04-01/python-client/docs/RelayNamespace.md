# RelayNamespace

Description of a namespace resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RelayNamespaceProperties**](RelayNamespaceProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**location** | **str** | Resource location. | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.relay_namespace import RelayNamespace

# TODO update the JSON string below
json = "{}"
# create an instance of RelayNamespace from a JSON string
relay_namespace_instance = RelayNamespace.from_json(json)
# print the JSON string representation of the object
print(RelayNamespace.to_json())

# convert the object into a dict
relay_namespace_dict = relay_namespace_instance.to_dict()
# create an instance of RelayNamespace from a dict
relay_namespace_from_dict = RelayNamespace.from_dict(relay_namespace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


