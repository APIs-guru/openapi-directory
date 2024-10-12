# InstanceConfig

Configuration parameters for a new instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_network** | [**NetworkAddress**](NetworkAddress.md) |  | [optional] 
**hyperthreading** | **bool** | Whether the instance should be provisioned with Hyperthreading enabled. | [optional] 
**id** | **str** | A transient unique identifier to idenfity an instance within an ProvisioningConfig request. | [optional] 
**instance_type** | **str** | Instance type. | [optional] 
**location** | **str** | Location where to deploy the instance. | [optional] 
**os_image** | **str** | OS image to initialize the instance. | [optional] 
**private_network** | [**NetworkAddress**](NetworkAddress.md) |  | [optional] 
**user_note** | **str** | User note field, it can be used by customers to add additional information for the BMS Ops team (b/194021617). | [optional] 

## Example

```python
from openapi_client.models.instance_config import InstanceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceConfig from a JSON string
instance_config_instance = InstanceConfig.from_json(json)
# print the JSON string representation of the object
print(InstanceConfig.to_json())

# convert the object into a dict
instance_config_dict = instance_config_instance.to_dict()
# create an instance of InstanceConfig from a dict
instance_config_from_dict = InstanceConfig.from_dict(instance_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


