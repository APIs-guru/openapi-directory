# GetNetworkAlertsHistory200ResponseInnerDestinationsEmail

email destinations for this alert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sent_at** | **str** | time when the alert was sent to the user(s) for this channel | [optional] 

## Example

```python
from openapi_client.models.get_network_alerts_history200_response_inner_destinations_email import GetNetworkAlertsHistory200ResponseInnerDestinationsEmail

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkAlertsHistory200ResponseInnerDestinationsEmail from a JSON string
get_network_alerts_history200_response_inner_destinations_email_instance = GetNetworkAlertsHistory200ResponseInnerDestinationsEmail.from_json(json)
# print the JSON string representation of the object
print(GetNetworkAlertsHistory200ResponseInnerDestinationsEmail.to_json())

# convert the object into a dict
get_network_alerts_history200_response_inner_destinations_email_dict = get_network_alerts_history200_response_inner_destinations_email_instance.to_dict()
# create an instance of GetNetworkAlertsHistory200ResponseInnerDestinationsEmail from a dict
get_network_alerts_history200_response_inner_destinations_email_from_dict = GetNetworkAlertsHistory200ResponseInnerDestinationsEmail.from_dict(get_network_alerts_history200_response_inner_destinations_email_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


