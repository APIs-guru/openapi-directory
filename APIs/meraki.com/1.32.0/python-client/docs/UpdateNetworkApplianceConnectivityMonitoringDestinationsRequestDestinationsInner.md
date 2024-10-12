# UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestDestinationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **bool** | Boolean indicating whether this is the default testing destination (true) or not (false). Defaults to false. Only one default is allowed | [optional] 
**description** | **str** | Description of the testing destination. Optional, defaults to null | [optional] 
**ip** | **str** | The IP address to test connectivity with | 

## Example

```python
from openapi_client.models.update_network_appliance_connectivity_monitoring_destinations_request_destinations_inner import UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestDestinationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestDestinationsInner from a JSON string
update_network_appliance_connectivity_monitoring_destinations_request_destinations_inner_instance = UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestDestinationsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestDestinationsInner.to_json())

# convert the object into a dict
update_network_appliance_connectivity_monitoring_destinations_request_destinations_inner_dict = update_network_appliance_connectivity_monitoring_destinations_request_destinations_inner_instance.to_dict()
# create an instance of UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestDestinationsInner from a dict
update_network_appliance_connectivity_monitoring_destinations_request_destinations_inner_from_dict = UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestDestinationsInner.from_dict(update_network_appliance_connectivity_monitoring_destinations_request_destinations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


