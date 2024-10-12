# ProvisioningQuota

A provisioning quota for a given project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_type** | **str** | The asset type of this provisioning quota. | [optional] 
**available_count** | **int** | The available count of the provisioning quota. | [optional] 
**gcp_service** | **str** | The gcp service of the provisioning quota. | [optional] 
**instance_quota** | [**InstanceQuota**](InstanceQuota.md) |  | [optional] 
**location** | **str** | The specific location of the provisioining quota. | [optional] 
**name** | **str** | Output only. The name of the provisioning quota. | [optional] [readonly] 
**network_bandwidth** | **str** | Network bandwidth, Gbps | [optional] 
**server_count** | **str** | Server count. | [optional] 
**storage_gib** | **str** | Storage size (GB). | [optional] 

## Example

```python
from openapi_client.models.provisioning_quota import ProvisioningQuota

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisioningQuota from a JSON string
provisioning_quota_instance = ProvisioningQuota.from_json(json)
# print the JSON string representation of the object
print(ProvisioningQuota.to_json())

# convert the object into a dict
provisioning_quota_dict = provisioning_quota_instance.to_dict()
# create an instance of ProvisioningQuota from a dict
provisioning_quota_from_dict = ProvisioningQuota.from_dict(provisioning_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


