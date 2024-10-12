# LogicalNetworkProperties

Logical Network Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**friendly_name** | **str** | The Friendly Name. | [optional] 
**logical_network_definitions_status** | **str** | A value indicating whether logical network definitions are isolated. | [optional] 
**logical_network_usage** | **str** | A value indicating whether logical network is used as private test network by test failover. | [optional] 
**network_virtualization_status** | **str** | A value indicating whether Network Virtualization is enabled for the logical network. | [optional] 

## Example

```python
from openapi_client.models.logical_network_properties import LogicalNetworkProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LogicalNetworkProperties from a JSON string
logical_network_properties_instance = LogicalNetworkProperties.from_json(json)
# print the JSON string representation of the object
print(LogicalNetworkProperties.to_json())

# convert the object into a dict
logical_network_properties_dict = logical_network_properties_instance.to_dict()
# create an instance of LogicalNetworkProperties from a dict
logical_network_properties_from_dict = LogicalNetworkProperties.from_dict(logical_network_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


