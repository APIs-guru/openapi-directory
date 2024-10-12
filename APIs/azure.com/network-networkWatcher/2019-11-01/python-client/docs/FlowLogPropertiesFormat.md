# FlowLogPropertiesFormat

Parameters that define the configuration of flow log.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Flag to enable/disable flow logging. | [optional] 
**flow_analytics_configuration** | [**TrafficAnalyticsProperties**](TrafficAnalyticsProperties.md) |  | [optional] 
**format** | [**FlowLogFormatParameters**](FlowLogFormatParameters.md) |  | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**retention_policy** | [**RetentionPolicyParameters**](RetentionPolicyParameters.md) |  | [optional] 
**storage_id** | **str** | ID of the storage account which is used to store the flow log. | 
**target_resource_guid** | **str** | Guid of network security group to which flow log will be applied. | [optional] [readonly] 
**target_resource_id** | **str** | ID of network security group to which flow log will be applied. | 

## Example

```python
from openapi_client.models.flow_log_properties_format import FlowLogPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of FlowLogPropertiesFormat from a JSON string
flow_log_properties_format_instance = FlowLogPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(FlowLogPropertiesFormat.to_json())

# convert the object into a dict
flow_log_properties_format_dict = flow_log_properties_format_instance.to_dict()
# create an instance of FlowLogPropertiesFormat from a dict
flow_log_properties_format_from_dict = FlowLogPropertiesFormat.from_dict(flow_log_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


