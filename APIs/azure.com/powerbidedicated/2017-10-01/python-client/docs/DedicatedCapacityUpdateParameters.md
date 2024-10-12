# DedicatedCapacityUpdateParameters

Provision request specification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DedicatedCapacityMutableProperties**](DedicatedCapacityMutableProperties.md) |  | [optional] 
**sku** | [**ResourceSku**](ResourceSku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Key-value pairs of additional provisioning properties. | [optional] 

## Example

```python
from openapi_client.models.dedicated_capacity_update_parameters import DedicatedCapacityUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedCapacityUpdateParameters from a JSON string
dedicated_capacity_update_parameters_instance = DedicatedCapacityUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(DedicatedCapacityUpdateParameters.to_json())

# convert the object into a dict
dedicated_capacity_update_parameters_dict = dedicated_capacity_update_parameters_instance.to_dict()
# create an instance of DedicatedCapacityUpdateParameters from a dict
dedicated_capacity_update_parameters_from_dict = DedicatedCapacityUpdateParameters.from_dict(dedicated_capacity_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


