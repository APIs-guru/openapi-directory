# GetNetworkAlertsHistory200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_data** | **object** | relevant data about the event that caused the alert | [optional] 
**alert_type** | **str** | user friendly alert type | [optional] 
**alert_type_id** | **str** | type of alert | [optional] 
**destinations** | [**GetNetworkAlertsHistory200ResponseInnerDestinations**](GetNetworkAlertsHistory200ResponseInnerDestinations.md) |  | [optional] 
**device** | [**GetNetworkAlertsHistory200ResponseInnerDevice**](GetNetworkAlertsHistory200ResponseInnerDevice.md) |  | [optional] 
**occurred_at** | **str** | time when the event occurred | [optional] 

## Example

```python
from openapi_client.models.get_network_alerts_history200_response_inner import GetNetworkAlertsHistory200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkAlertsHistory200ResponseInner from a JSON string
get_network_alerts_history200_response_inner_instance = GetNetworkAlertsHistory200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkAlertsHistory200ResponseInner.to_json())

# convert the object into a dict
get_network_alerts_history200_response_inner_dict = get_network_alerts_history200_response_inner_instance.to_dict()
# create an instance of GetNetworkAlertsHistory200ResponseInner from a dict
get_network_alerts_history200_response_inner_from_dict = GetNetworkAlertsHistory200ResponseInner.from_dict(get_network_alerts_history200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


