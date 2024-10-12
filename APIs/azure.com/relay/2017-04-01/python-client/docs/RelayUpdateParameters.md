# RelayUpdateParameters

Description of a namespace resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RelayNamespaceProperties**](RelayNamespaceProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.relay_update_parameters import RelayUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RelayUpdateParameters from a JSON string
relay_update_parameters_instance = RelayUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(RelayUpdateParameters.to_json())

# convert the object into a dict
relay_update_parameters_dict = relay_update_parameters_instance.to_dict()
# create an instance of RelayUpdateParameters from a dict
relay_update_parameters_from_dict = RelayUpdateParameters.from_dict(relay_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


