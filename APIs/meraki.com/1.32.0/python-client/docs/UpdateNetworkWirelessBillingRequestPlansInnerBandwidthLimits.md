# UpdateNetworkWirelessBillingRequestPlansInnerBandwidthLimits

The uplink bandwidth settings for the pricing plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit_down** | **int** | The maximum download limit (integer, in Kbps). null indicates no limit | [optional] 
**limit_up** | **int** | The maximum upload limit (integer, in Kbps). null indicates no limit | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_billing_request_plans_inner_bandwidth_limits import UpdateNetworkWirelessBillingRequestPlansInnerBandwidthLimits

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessBillingRequestPlansInnerBandwidthLimits from a JSON string
update_network_wireless_billing_request_plans_inner_bandwidth_limits_instance = UpdateNetworkWirelessBillingRequestPlansInnerBandwidthLimits.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessBillingRequestPlansInnerBandwidthLimits.to_json())

# convert the object into a dict
update_network_wireless_billing_request_plans_inner_bandwidth_limits_dict = update_network_wireless_billing_request_plans_inner_bandwidth_limits_instance.to_dict()
# create an instance of UpdateNetworkWirelessBillingRequestPlansInnerBandwidthLimits from a dict
update_network_wireless_billing_request_plans_inner_bandwidth_limits_from_dict = UpdateNetworkWirelessBillingRequestPlansInnerBandwidthLimits.from_dict(update_network_wireless_billing_request_plans_inner_bandwidth_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


