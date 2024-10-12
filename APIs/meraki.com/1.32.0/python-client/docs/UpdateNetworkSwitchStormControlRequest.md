# UpdateNetworkSwitchStormControlRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**broadcast_threshold** | **int** | Percentage (1 to 99) of total available port bandwidth for broadcast traffic type. Default value 100 percent rate is to clear the configuration. | [optional] 
**multicast_threshold** | **int** | Percentage (1 to 99) of total available port bandwidth for multicast traffic type. Default value 100 percent rate is to clear the configuration. | [optional] 
**unknown_unicast_threshold** | **int** | Percentage (1 to 99) of total available port bandwidth for unknown unicast (dlf-destination lookup failure) traffic type. Default value 100 percent rate is to clear the configuration. | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_storm_control_request import UpdateNetworkSwitchStormControlRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchStormControlRequest from a JSON string
update_network_switch_storm_control_request_instance = UpdateNetworkSwitchStormControlRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchStormControlRequest.to_json())

# convert the object into a dict
update_network_switch_storm_control_request_dict = update_network_switch_storm_control_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchStormControlRequest from a dict
update_network_switch_storm_control_request_from_dict = UpdateNetworkSwitchStormControlRequest.from_dict(update_network_switch_storm_control_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


