# PrivateClusterConfig

Configuration options for private workstation clusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_projects** | **List[str]** | Optional. Additional projects that are allowed to attach to the workstation cluster&#39;s service attachment. By default, the workstation cluster&#39;s project and the VPC host project (if different) are allowed. | [optional] 
**cluster_hostname** | **str** | Output only. Hostname for the workstation cluster. This field will be populated only when private endpoint is enabled. To access workstations in the workstation cluster, create a new DNS zone mapping this domain name to an internal IP address and a forwarding rule mapping that address to the service attachment. | [optional] [readonly] 
**enable_private_endpoint** | **bool** | Immutable. Whether Workstations endpoint is private. | [optional] 
**service_attachment_uri** | **str** | Output only. Service attachment URI for the workstation cluster. The service attachemnt is created when private endpoint is enabled. To access workstations in the workstation cluster, configure access to the managed service using [Private Service Connect](https://cloud.google.com/vpc/docs/configure-private-service-connect-services). | [optional] [readonly] 

## Example

```python
from openapi_client.models.private_cluster_config import PrivateClusterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateClusterConfig from a JSON string
private_cluster_config_instance = PrivateClusterConfig.from_json(json)
# print the JSON string representation of the object
print(PrivateClusterConfig.to_json())

# convert the object into a dict
private_cluster_config_dict = private_cluster_config_instance.to_dict()
# create an instance of PrivateClusterConfig from a dict
private_cluster_config_from_dict = PrivateClusterConfig.from_dict(private_cluster_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


