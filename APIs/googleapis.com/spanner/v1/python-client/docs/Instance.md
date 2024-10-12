# Instance

An isolated set of Cloud Spanner resources on which databases can be hosted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoscaling_config** | [**AutoscalingConfig**](AutoscalingConfig.md) |  | [optional] 
**config** | **str** | Required. The name of the instance&#39;s configuration. Values are of the form &#x60;projects//instanceConfigs/&#x60;. See also InstanceConfig and ListInstanceConfigs. | [optional] 
**create_time** | **str** | Output only. The time at which the instance was created. | [optional] [readonly] 
**display_name** | **str** | Required. The descriptive name for this instance as it appears in UIs. Must be unique per project and between 4 and 30 characters in length. | [optional] 
**endpoint_uris** | **List[str]** | Deprecated. This field is not populated. | [optional] 
**free_instance_metadata** | [**FreeInstanceMetadata**](FreeInstanceMetadata.md) |  | [optional] 
**instance_type** | **str** | The &#x60;InstanceType&#x60; of the current instance. | [optional] 
**labels** | **Dict[str, str]** | Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer&#39;s organizational needs and deployment strategies. Cloud Labels can be used to filter collections of resources. They can be used to control how resource metrics are aggregated. And they can be used as arguments to policy management rules (e.g. route, firewall, load balancing, etc.). * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: &#x60;a-z{0,62}&#x60;. * Label values must be between 0 and 63 characters long and must conform to the regular expression &#x60;[a-z0-9_-]{0,63}&#x60;. * No more than 64 labels can be associated with a given resource. See https://goo.gl/xmQnxf for more information on and examples of labels. If you plan to use labels in your own code, please note that additional characters may be allowed in the future. And so you are advised to use an internal label representation, such as JSON, which doesn&#39;t rely upon specific characters being disallowed. For example, representing labels as the string: name + \&quot;_\&quot; + value would prove problematic if we were to allow \&quot;_\&quot; in a future release. | [optional] 
**name** | **str** | Required. A unique identifier for the instance, which cannot be changed after the instance is created. Values are of the form &#x60;projects//instances/a-z*[a-z0-9]&#x60;. The final segment of the name must be between 2 and 64 characters in length. | [optional] 
**node_count** | **int** | The number of nodes allocated to this instance. At most one of either node_count or processing_units should be present in the message. Users can set the node_count field to specify the target number of nodes allocated to the instance. This may be zero in API responses for instances that are not yet in state &#x60;READY&#x60;. See [the documentation](https://cloud.google.com/spanner/docs/compute-capacity) for more information about nodes and processing units. | [optional] 
**processing_units** | **int** | The number of processing units allocated to this instance. At most one of processing_units or node_count should be present in the message. Users can set the processing_units field to specify the target number of processing units allocated to the instance. This may be zero in API responses for instances that are not yet in state &#x60;READY&#x60;. See [the documentation](https://cloud.google.com/spanner/docs/compute-capacity) for more information about nodes and processing units. | [optional] 
**state** | **str** | Output only. The current instance state. For CreateInstance, the state must be either omitted or set to &#x60;CREATING&#x60;. For UpdateInstance, the state must be either omitted or set to &#x60;READY&#x60;. | [optional] [readonly] 
**update_time** | **str** | Output only. The time at which the instance was most recently updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance import Instance

# TODO update the JSON string below
json = "{}"
# create an instance of Instance from a JSON string
instance_instance = Instance.from_json(json)
# print the JSON string representation of the object
print(Instance.to_json())

# convert the object into a dict
instance_dict = instance_instance.to_dict()
# create an instance of Instance from a dict
instance_from_dict = Instance.from_dict(instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


