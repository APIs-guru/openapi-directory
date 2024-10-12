# ClusterPropertiesUpdateParameters

Describes the cluster resource properties that can be updated during PATCH operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_on_features** | [**List[AddOnFeatures]**](AddOnFeatures.md) | The list of add-on features to enable in the cluster. | [optional] 
**certificate** | [**CertificateDescription**](CertificateDescription.md) |  | [optional] 
**certificate_common_names** | [**ServerCertificateCommonNames**](ServerCertificateCommonNames.md) |  | [optional] 
**client_certificate_common_names** | [**List[ClientCertificateCommonName]**](ClientCertificateCommonName.md) | The list of client certificates referenced by common name that are allowed to manage the cluster. This will overwrite the existing list. | [optional] 
**client_certificate_thumbprints** | [**List[ClientCertificateThumbprint]**](ClientCertificateThumbprint.md) | The list of client certificates referenced by thumbprint that are allowed to manage the cluster. This will overwrite the existing list. | [optional] 
**cluster_code_version** | **str** | The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to &#39;Manual&#39;. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**. | [optional] 
**event_store_service_enabled** | **bool** | Indicates if the event store service is enabled. | [optional] 
**fabric_settings** | [**List[SettingsSectionDescription]**](SettingsSectionDescription.md) | The list of custom fabric settings to configure the cluster. This will overwrite the existing list. | [optional] 
**node_types** | [**List[NodeTypeDescription]**](NodeTypeDescription.md) | The list of node types in the cluster. This will overwrite the existing list. | [optional] 
**reliability_level** | [**ReliabilityLevel**](ReliabilityLevel.md) |  | [optional] 
**reverse_proxy_certificate** | [**CertificateDescription**](CertificateDescription.md) |  | [optional] 
**upgrade_description** | [**ClusterUpgradePolicy**](ClusterUpgradePolicy.md) |  | [optional] 
**upgrade_mode** | [**UpgradeMode**](UpgradeMode.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_properties_update_parameters import ClusterPropertiesUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterPropertiesUpdateParameters from a JSON string
cluster_properties_update_parameters_instance = ClusterPropertiesUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ClusterPropertiesUpdateParameters.to_json())

# convert the object into a dict
cluster_properties_update_parameters_dict = cluster_properties_update_parameters_instance.to_dict()
# create an instance of ClusterPropertiesUpdateParameters from a dict
cluster_properties_update_parameters_from_dict = ClusterPropertiesUpdateParameters.from_dict(cluster_properties_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


