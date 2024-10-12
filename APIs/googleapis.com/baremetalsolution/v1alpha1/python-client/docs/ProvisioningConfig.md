# ProvisioningConfig

An provisioning configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instances** | [**List[InstanceConfig]**](InstanceConfig.md) | Instances to be created. | [optional] 
**networks** | [**List[NetworkConfig]**](NetworkConfig.md) | Networks to be created. | [optional] 
**ticket_id** | **str** | A reference to track the request. | [optional] 
**volumes** | [**List[VolumeConfig]**](VolumeConfig.md) | Volumes to be created. | [optional] 

## Example

```python
from openapi_client.models.provisioning_config import ProvisioningConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisioningConfig from a JSON string
provisioning_config_instance = ProvisioningConfig.from_json(json)
# print the JSON string representation of the object
print(ProvisioningConfig.to_json())

# convert the object into a dict
provisioning_config_dict = provisioning_config_instance.to_dict()
# create an instance of ProvisioningConfig from a dict
provisioning_config_from_dict = ProvisioningConfig.from_dict(provisioning_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


