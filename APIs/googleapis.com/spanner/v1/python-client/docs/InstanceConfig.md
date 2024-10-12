# InstanceConfig

A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_config** | **str** | Base configuration name, e.g. projects//instanceConfigs/nam3, based on which this configuration is created. Only set for user managed configurations. &#x60;base_config&#x60; must refer to a configuration of type GOOGLE_MANAGED in the same project as this configuration. | [optional] 
**config_type** | **str** | Output only. Whether this instance config is a Google or User Managed Configuration. | [optional] [readonly] 
**display_name** | **str** | The name of this instance configuration as it appears in UIs. | [optional] 
**etag** | **str** | etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a instance config from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform instance config updates in order to avoid race conditions: An etag is returned in the response which contains instance configs, and systems are expected to put that etag in the request to update instance config to ensure that their change will be applied to the same version of the instance config. If no etag is provided in the call to update instance config, then the existing instance config is overwritten blindly. | [optional] 
**free_instance_availability** | **str** | Output only. Describes whether free instances are available to be created in this instance config. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer&#39;s organizational needs and deployment strategies. Cloud Labels can be used to filter collections of resources. They can be used to control how resource metrics are aggregated. And they can be used as arguments to policy management rules (e.g. route, firewall, load balancing, etc.). * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: &#x60;a-z{0,62}&#x60;. * Label values must be between 0 and 63 characters long and must conform to the regular expression &#x60;[a-z0-9_-]{0,63}&#x60;. * No more than 64 labels can be associated with a given resource. See https://goo.gl/xmQnxf for more information on and examples of labels. If you plan to use labels in your own code, please note that additional characters may be allowed in the future. Therefore, you are advised to use an internal label representation, such as JSON, which doesn&#39;t rely upon specific characters being disallowed. For example, representing labels as the string: name + \&quot;_\&quot; + value would prove problematic if we were to allow \&quot;_\&quot; in a future release. | [optional] 
**leader_options** | **List[str]** | Allowed values of the \&quot;default_leader\&quot; schema option for databases in instances that use this instance configuration. | [optional] 
**name** | **str** | A unique identifier for the instance configuration. Values are of the form &#x60;projects//instanceConfigs/a-z*&#x60;. | [optional] 
**optional_replicas** | [**List[ReplicaInfo]**](ReplicaInfo.md) | Output only. The available optional replicas to choose from for user managed configurations. Populated for Google managed configurations. | [optional] [readonly] 
**reconciling** | **bool** | Output only. If true, the instance config is being created or updated. If false, there are no ongoing operations for the instance config. | [optional] [readonly] 
**replicas** | [**List[ReplicaInfo]**](ReplicaInfo.md) | The geographic placement of nodes in this instance configuration and their replication properties. | [optional] 
**state** | **str** | Output only. The current instance config state. Applicable only for USER_MANAGED configs. | [optional] [readonly] 
**storage_limit_per_processing_unit** | **str** | Output only. The storage limit in bytes per processing unit. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance_config import InstanceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceConfig from a JSON string
instance_config_instance = InstanceConfig.from_json(json)
# print the JSON string representation of the object
print(InstanceConfig.to_json())

# convert the object into a dict
instance_config_dict = instance_config_instance.to_dict()
# create an instance of InstanceConfig from a dict
instance_config_from_dict = InstanceConfig.from_dict(instance_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


