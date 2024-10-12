# ClusterProperties

The cluster resource properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_cluster_versions** | [**List[ClusterVersionDetails]**](ClusterVersionDetails.md) | The available cluster code version which the cluster can upgrade to, note that you must choose upgradeMode to manual to upgrade to | [optional] [readonly] 
**azure_active_directory** | [**AzureActiveDirectory**](AzureActiveDirectory.md) |  | [optional] 
**certificate** | [**CertificateDescription**](CertificateDescription.md) |  | [optional] 
**client_certificate_common_names** | [**List[ClientCertificateCommonName]**](ClientCertificateCommonName.md) |  List of client certificates to whitelist based on common names | [optional] 
**client_certificate_thumbprints** | [**List[ClientCertificateThumbprint]**](ClientCertificateThumbprint.md) | The client thumbprint details ,it is used for client access for cluster operation | [optional] 
**cluster_code_version** | **str** | The ServiceFabric code version running in your cluster | [optional] 
**cluster_endpoint** | **str** | The endpoint for the cluster connecting to servicefabric resource provider | [optional] [readonly] 
**cluster_id** | **str** | The unique identifier for the cluster resource | [optional] [readonly] 
**cluster_state** | **str** | The state for the cluster | [optional] [readonly] 
**diagnostics_storage_account_config** | [**DiagnosticsStorageAccountConfig**](DiagnosticsStorageAccountConfig.md) |  | [optional] 
**fabric_settings** | [**List[SettingsSectionDescription]**](SettingsSectionDescription.md) | List of custom fabric settings to configure the cluster. | [optional] 
**management_endpoint** | **str** | The http management endpoint of the cluster | 
**node_types** | [**List[NodeTypeDescription]**](NodeTypeDescription.md) | The list of node types that make up the cluster | 
**provisioning_state** | **str** | The provisioning state of the cluster resource | [optional] [readonly] 
**reliability_level** | **str** | Cluster reliability level indicates replica set size of system service | [optional] 
**reverse_proxy_certificate** | [**CertificateDescription**](CertificateDescription.md) |  | [optional] 
**upgrade_description** | [**ClusterUpgradePolicy**](ClusterUpgradePolicy.md) |  | [optional] 
**upgrade_mode** | **str** | Cluster upgrade mode indicates if fabric upgrade is initiated automatically by the system or not | [optional] 
**vm_image** | **str** | The name of VM image VMSS has been configured with. Generic names such as Windows or Linux can be used. | [optional] 

## Example

```python
from openapi_client.models.cluster_properties import ClusterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterProperties from a JSON string
cluster_properties_instance = ClusterProperties.from_json(json)
# print the JSON string representation of the object
print(ClusterProperties.to_json())

# convert the object into a dict
cluster_properties_dict = cluster_properties_instance.to_dict()
# create an instance of ClusterProperties from a dict
cluster_properties_from_dict = ClusterProperties.from_dict(cluster_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


