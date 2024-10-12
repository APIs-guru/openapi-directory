# KubernetesSoftwareConfig

The software configuration for this Dataproc cluster running on Kubernetes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_version** | **Dict[str, str]** | The components that should be installed in this Dataproc cluster. The key must be a string from the KubernetesComponent enumeration. The value is the version of the software to be installed. At least one entry must be specified. | [optional] 
**properties** | **Dict[str, str]** | The properties to set on daemon config files.Property keys are specified in prefix:property format, for example spark:spark.kubernetes.container.image. The following are supported prefixes and their mappings: spark: spark-defaults.confFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties). | [optional] 

## Example

```python
from openapi_client.models.kubernetes_software_config import KubernetesSoftwareConfig

# TODO update the JSON string below
json = "{}"
# create an instance of KubernetesSoftwareConfig from a JSON string
kubernetes_software_config_instance = KubernetesSoftwareConfig.from_json(json)
# print the JSON string representation of the object
print(KubernetesSoftwareConfig.to_json())

# convert the object into a dict
kubernetes_software_config_dict = kubernetes_software_config_instance.to_dict()
# create an instance of KubernetesSoftwareConfig from a dict
kubernetes_software_config_from_dict = KubernetesSoftwareConfig.from_dict(kubernetes_software_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


