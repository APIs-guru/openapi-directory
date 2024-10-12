# SoftwareConfig

Specifies the selection and config of software inside the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_version** | **str** | Optional. The version of software inside the cluster. It must be one of the supported Dataproc Versions (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#supported_dataproc_versions), such as \&quot;1.2\&quot; (including a subminor version, such as \&quot;1.2.29\&quot;), or the \&quot;preview\&quot; version (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions). If unspecified, it defaults to the latest Debian version. | [optional] 
**optional_components** | **List[str]** | Optional. The set of components to activate on the cluster. | [optional] 
**properties** | **Dict[str, str]** | Optional. The properties to set on daemon config files.Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. The following are supported prefixes and their mappings: capacity-scheduler: capacity-scheduler.xml core: core-site.xml distcp: distcp-default.xml hdfs: hdfs-site.xml hive: hive-site.xml mapred: mapred-site.xml pig: pig.properties spark: spark-defaults.conf yarn: yarn-site.xmlFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties). | [optional] 

## Example

```python
from openapi_client.models.software_config import SoftwareConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareConfig from a JSON string
software_config_instance = SoftwareConfig.from_json(json)
# print the JSON string representation of the object
print(SoftwareConfig.to_json())

# convert the object into a dict
software_config_dict = software_config_instance.to_dict()
# create an instance of SoftwareConfig from a dict
software_config_from_dict = SoftwareConfig.from_dict(software_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


