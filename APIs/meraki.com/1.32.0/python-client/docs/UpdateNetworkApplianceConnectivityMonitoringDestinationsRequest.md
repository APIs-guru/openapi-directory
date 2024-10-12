# UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinations** | [**List[UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestDestinationsInner]**](UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestDestinationsInner.md) | The list of connectivity monitoring destinations | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_connectivity_monitoring_destinations_request import UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest from a JSON string
update_network_appliance_connectivity_monitoring_destinations_request_instance = UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest.to_json())

# convert the object into a dict
update_network_appliance_connectivity_monitoring_destinations_request_dict = update_network_appliance_connectivity_monitoring_destinations_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest from a dict
update_network_appliance_connectivity_monitoring_destinations_request_from_dict = UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest.from_dict(update_network_appliance_connectivity_monitoring_destinations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


