# GetNetworkAlertsHistory200ResponseInnerDestinations

the destinations this alert is configured to be delivered to

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | [**GetNetworkAlertsHistory200ResponseInnerDestinationsEmail**](GetNetworkAlertsHistory200ResponseInnerDestinationsEmail.md) |  | [optional] 
**push** | [**GetNetworkAlertsHistory200ResponseInnerDestinationsPush**](GetNetworkAlertsHistory200ResponseInnerDestinationsPush.md) |  | [optional] 
**sms** | [**GetNetworkAlertsHistory200ResponseInnerDestinationsSms**](GetNetworkAlertsHistory200ResponseInnerDestinationsSms.md) |  | [optional] 
**webhook** | [**GetNetworkAlertsHistory200ResponseInnerDestinationsWebhook**](GetNetworkAlertsHistory200ResponseInnerDestinationsWebhook.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_network_alerts_history200_response_inner_destinations import GetNetworkAlertsHistory200ResponseInnerDestinations

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkAlertsHistory200ResponseInnerDestinations from a JSON string
get_network_alerts_history200_response_inner_destinations_instance = GetNetworkAlertsHistory200ResponseInnerDestinations.from_json(json)
# print the JSON string representation of the object
print(GetNetworkAlertsHistory200ResponseInnerDestinations.to_json())

# convert the object into a dict
get_network_alerts_history200_response_inner_destinations_dict = get_network_alerts_history200_response_inner_destinations_instance.to_dict()
# create an instance of GetNetworkAlertsHistory200ResponseInnerDestinations from a dict
get_network_alerts_history200_response_inner_destinations_from_dict = GetNetworkAlertsHistory200ResponseInnerDestinations.from_dict(get_network_alerts_history200_response_inner_destinations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


