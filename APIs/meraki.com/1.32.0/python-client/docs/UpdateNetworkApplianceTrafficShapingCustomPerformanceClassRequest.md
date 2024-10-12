# UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_jitter** | **int** | Maximum jitter in milliseconds | [optional] 
**max_latency** | **int** | Maximum latency in milliseconds | [optional] 
**max_loss_percentage** | **int** | Maximum percentage of packet loss | [optional] 
**name** | **str** | Name of the custom performance class | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_custom_performance_class_request import UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest from a JSON string
update_network_appliance_traffic_shaping_custom_performance_class_request_instance = UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_custom_performance_class_request_dict = update_network_appliance_traffic_shaping_custom_performance_class_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest from a dict
update_network_appliance_traffic_shaping_custom_performance_class_request_from_dict = UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest.from_dict(update_network_appliance_traffic_shaping_custom_performance_class_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


