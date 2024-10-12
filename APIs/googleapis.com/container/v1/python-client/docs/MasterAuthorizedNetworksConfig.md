# MasterAuthorizedNetworksConfig

Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cidr_blocks** | [**List[CidrBlock]**](CidrBlock.md) | cidr_blocks define up to 50 external networks that could access Kubernetes master through HTTPS. | [optional] 
**enabled** | **bool** | Whether or not master authorized networks is enabled. | [optional] 
**gcp_public_cidrs_access_enabled** | **bool** | Whether master is accessbile via Google Compute Engine Public IP addresses. | [optional] 

## Example

```python
from openapi_client.models.master_authorized_networks_config import MasterAuthorizedNetworksConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MasterAuthorizedNetworksConfig from a JSON string
master_authorized_networks_config_instance = MasterAuthorizedNetworksConfig.from_json(json)
# print the JSON string representation of the object
print(MasterAuthorizedNetworksConfig.to_json())

# convert the object into a dict
master_authorized_networks_config_dict = master_authorized_networks_config_instance.to_dict()
# create an instance of MasterAuthorizedNetworksConfig from a dict
master_authorized_networks_config_from_dict = MasterAuthorizedNetworksConfig.from_dict(master_authorized_networks_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


