# ProvisioningConfig

A provisioning configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_console_uri** | **str** | Output only. URI to Cloud Console UI view of this provisioning config. | [optional] [readonly] 
**custom_id** | **str** | Optional. The user-defined identifier of the provisioning config. | [optional] 
**email** | **str** | Email provided to send a confirmation with provisioning config to. Deprecated in favour of email field in request messages. | [optional] 
**handover_service_account** | **str** | A service account to enable customers to access instance credentials upon handover. | [optional] 
**instances** | [**List[InstanceConfig]**](InstanceConfig.md) | Instances to be created. | [optional] 
**location** | **str** | Optional. Location name of this ProvisioningConfig. It is optional only for Intake UI transition period. | [optional] 
**name** | **str** | Output only. The system-generated name of the provisioning config. This follows the UUID format. | [optional] [readonly] 
**networks** | [**List[NetworkConfig]**](NetworkConfig.md) | Networks to be created. | [optional] 
**pod** | **str** | Optional. Pod name. Pod is an independent part of infrastructure. Instance can be connected to the assets (networks, volumes, nfsshares) allocated in the same pod only. | [optional] 
**state** | **str** | Output only. State of ProvisioningConfig. | [optional] [readonly] 
**status_message** | **str** | Optional status messages associated with the FAILED state. | [optional] 
**ticket_id** | **str** | A generated ticket id to track provisioning request. | [optional] 
**update_time** | **str** | Output only. Last update timestamp. | [optional] [readonly] 
**volumes** | [**List[VolumeConfig]**](VolumeConfig.md) | Volumes to be created. | [optional] 
**vpc_sc_enabled** | **bool** | If true, VPC SC is enabled for the cluster. | [optional] 

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


