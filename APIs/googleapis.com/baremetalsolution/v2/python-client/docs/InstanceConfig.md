# InstanceConfig

Configuration parameters for a new instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_networks_enabled** | **bool** | If true networks can be from different projects of the same vendor account. | [optional] 
**client_network** | [**NetworkAddress**](NetworkAddress.md) |  | [optional] 
**hyperthreading** | **bool** | Whether the instance should be provisioned with Hyperthreading enabled. | [optional] 
**id** | **str** | A transient unique identifier to idenfity an instance within an ProvisioningConfig request. | [optional] 
**instance_type** | **str** | Instance type. [Available types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations) | [optional] 
**kms_key_version** | **str** | Name of the KMS crypto key version used to encrypt the initial passwords. The key has to have ASYMMETRIC_DECRYPT purpose. | [optional] 
**logical_interfaces** | [**List[GoogleCloudBaremetalsolutionV2LogicalInterface]**](GoogleCloudBaremetalsolutionV2LogicalInterface.md) | List of logical interfaces for the instance. The number of logical interfaces will be the same as number of hardware bond/nic on the chosen network template. Filled if InstanceConfig.multivlan_config is true. | [optional] 
**name** | **str** | The name of the instance config. | [optional] 
**network_config** | **str** | The type of network configuration on the instance. | [optional] 
**network_template** | **str** | Server network template name. Filled if InstanceConfig.multivlan_config is true. | [optional] 
**os_image** | **str** | OS image to initialize the instance. [Available images](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations) | [optional] 
**private_network** | [**NetworkAddress**](NetworkAddress.md) |  | [optional] 
**ssh_key_names** | **List[str]** | Optional. List of names of ssh keys used to provision the instance. | [optional] 
**user_note** | **str** | User note field, it can be used by customers to add additional information for the BMS Ops team . | [optional] 

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


