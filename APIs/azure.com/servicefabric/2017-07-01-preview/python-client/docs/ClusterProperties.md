# ClusterProperties

Describes the cluster resource properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_on_features** | [**List[AddOnFeatures]**](AddOnFeatures.md) | The list of add-on features to enable in the cluster. | [optional] 
**available_cluster_versions** | [**List[ClusterVersionDetails]**](ClusterVersionDetails.md) | The Service Fabric runtime versions available for this cluster. | [optional] 
**azure_active_directory** | [**AzureActiveDirectory**](AzureActiveDirectory.md) |  | [optional] 
**certificate** | [**CertificateDescription**](CertificateDescription.md) |  | [optional] 
**client_certificate_common_names** | [**List[ClientCertificateCommonName]**](ClientCertificateCommonName.md) | The list of client certificates referenced by common name that are allowed to manage the cluster. | [optional] 
**client_certificate_thumbprints** | [**List[ClientCertificateThumbprint]**](ClientCertificateThumbprint.md) | The list of client certificates referenced by thumbprint that are allowed to manage the cluster. | [optional] 
**cluster_code_version** | **str** | The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to &#39;Manual&#39;. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**. | [optional] 
**cluster_endpoint** | **str** | The Azure Resource Provider endpoint. A system service in the cluster connects to this  endpoint. | [optional] [readonly] 
**cluster_id** | **str** | A service generated unique identifier for the cluster resource. | [optional] [readonly] 
**cluster_state** | [**ClusterState**](ClusterState.md) |  | [optional] 
**diagnostics_storage_account_config** | [**DiagnosticsStorageAccountConfig**](DiagnosticsStorageAccountConfig.md) |  | [optional] 
**fabric_settings** | [**List[SettingsSectionDescription]**](SettingsSectionDescription.md) | The list of custom fabric settings to configure the cluster. | [optional] 
**management_endpoint** | **str** | The http management endpoint of the cluster. | 
**node_types** | [**List[NodeTypeDescription]**](NodeTypeDescription.md) | The list of node types in the cluster. | 
**provisioning_state** | **str** | The provisioning state of the cluster resource. | [optional] [readonly] 
**reliability_level** | [**ReliabilityLevel**](ReliabilityLevel.md) |  | [optional] 
**reverse_proxy_certificate** | [**CertificateDescription**](CertificateDescription.md) |  | [optional] 
**upgrade_description** | [**ClusterUpgradePolicy**](ClusterUpgradePolicy.md) |  | [optional] 
**upgrade_mode** | [**UpgradeMode**](UpgradeMode.md) |  | [optional] 
**vm_image** | **str** | The VM image VMSS has been configured with. Generic names such as Windows or Linux can be used. | [optional] 

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


