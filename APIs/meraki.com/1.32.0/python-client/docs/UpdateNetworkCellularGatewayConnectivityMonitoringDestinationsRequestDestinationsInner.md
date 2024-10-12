# UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestDestinationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **bool** | Boolean indicating whether this is the default testing destination (true) or not (false). Defaults to false. Only one default is allowed | [optional] [default to False]
**description** | **str** | Description of the testing destination. Optional, defaults to an empty string | [optional] [default to '']
**ip** | **str** | The IP address to test connectivity with | 

## Example

```python
from openapi_client.models.update_network_cellular_gateway_connectivity_monitoring_destinations_request_destinations_inner import UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestDestinationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestDestinationsInner from a JSON string
update_network_cellular_gateway_connectivity_monitoring_destinations_request_destinations_inner_instance = UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestDestinationsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestDestinationsInner.to_json())

# convert the object into a dict
update_network_cellular_gateway_connectivity_monitoring_destinations_request_destinations_inner_dict = update_network_cellular_gateway_connectivity_monitoring_destinations_request_destinations_inner_instance.to_dict()
# create an instance of UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestDestinationsInner from a dict
update_network_cellular_gateway_connectivity_monitoring_destinations_request_destinations_inner_from_dict = UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestDestinationsInner.from_dict(update_network_cellular_gateway_connectivity_monitoring_destinations_request_destinations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


