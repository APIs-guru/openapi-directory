# RelayNamespaceUpdateParameter

Parameters supplied to the Patch Namespace operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.relay_namespace_update_parameter import RelayNamespaceUpdateParameter

# TODO update the JSON string below
json = "{}"
# create an instance of RelayNamespaceUpdateParameter from a JSON string
relay_namespace_update_parameter_instance = RelayNamespaceUpdateParameter.from_json(json)
# print the JSON string representation of the object
print(RelayNamespaceUpdateParameter.to_json())

# convert the object into a dict
relay_namespace_update_parameter_dict = relay_namespace_update_parameter_instance.to_dict()
# create an instance of RelayNamespaceUpdateParameter from a dict
relay_namespace_update_parameter_from_dict = RelayNamespaceUpdateParameter.from_dict(relay_namespace_update_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


