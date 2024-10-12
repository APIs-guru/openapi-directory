# BastionHostIPConfiguration

IP configuration of an Bastion Host.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | Name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**BastionHostIPConfigurationPropertiesFormat**](BastionHostIPConfigurationPropertiesFormat.md) |  | [optional] 
**type** | **str** | Ip configuration type. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.bastion_host_ip_configuration import BastionHostIPConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of BastionHostIPConfiguration from a JSON string
bastion_host_ip_configuration_instance = BastionHostIPConfiguration.from_json(json)
# print the JSON string representation of the object
print(BastionHostIPConfiguration.to_json())

# convert the object into a dict
bastion_host_ip_configuration_dict = bastion_host_ip_configuration_instance.to_dict()
# create an instance of BastionHostIPConfiguration from a dict
bastion_host_ip_configuration_from_dict = BastionHostIPConfiguration.from_dict(bastion_host_ip_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


