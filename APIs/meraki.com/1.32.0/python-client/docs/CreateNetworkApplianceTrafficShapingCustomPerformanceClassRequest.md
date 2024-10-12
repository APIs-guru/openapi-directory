# CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_jitter** | **int** | Maximum jitter in milliseconds | [optional] 
**max_latency** | **int** | Maximum latency in milliseconds | [optional] 
**max_loss_percentage** | **int** | Maximum percentage of packet loss | [optional] 
**name** | **str** | Name of the custom performance class | 

## Example

```python
from openapi_client.models.create_network_appliance_traffic_shaping_custom_performance_class_request import CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest from a JSON string
create_network_appliance_traffic_shaping_custom_performance_class_request_instance = CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest.to_json())

# convert the object into a dict
create_network_appliance_traffic_shaping_custom_performance_class_request_dict = create_network_appliance_traffic_shaping_custom_performance_class_request_instance.to_dict()
# create an instance of CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest from a dict
create_network_appliance_traffic_shaping_custom_performance_class_request_from_dict = CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest.from_dict(create_network_appliance_traffic_shaping_custom_performance_class_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


