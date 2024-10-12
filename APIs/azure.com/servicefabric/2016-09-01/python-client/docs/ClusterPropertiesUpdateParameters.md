# ClusterPropertiesUpdateParameters

The cluster resource properties can be updated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | [**CertificateDescription**](CertificateDescription.md) |  | [optional] 
**client_certificate_common_names** | [**List[ClientCertificateCommonName]**](ClientCertificateCommonName.md) | List of client certificates to whitelist based on common names. | [optional] 
**client_certificate_thumbprints** | [**List[ClientCertificateThumbprint]**](ClientCertificateThumbprint.md) | The client thumbprint details, it is used for client access for cluster operation, it will override existing collection | [optional] 
**cluster_code_version** | **str** | The ServiceFabric code version, if set it, please make sure you have set upgradeMode to Manual, otherwise ,it will fail, if you are using PUT new cluster, you can get the version by using ClusterVersions_List, if you are updating existing cluster, you can get the availableClusterVersions from Clusters_Get | [optional] 
**fabric_settings** | [**List[SettingsSectionDescription]**](SettingsSectionDescription.md) | List of custom fabric settings to configure the cluster, Note, it will overwrite existing collection | [optional] 
**node_types** | [**List[NodeTypeDescription]**](NodeTypeDescription.md) | The list of node types that make up the cluster, it will override | [optional] 
**reliability_level** | **str** | This level is used to set the number of replicas of the system services | [optional] 
**reverse_proxy_certificate** | [**CertificateDescription**](CertificateDescription.md) |  | [optional] 
**upgrade_description** | [**ClusterUpgradePolicy**](ClusterUpgradePolicy.md) |  | [optional] 
**upgrade_mode** | **str** | Cluster upgrade mode indicates if fabric upgrade is initiated automatically by the system or not | [optional] 

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


