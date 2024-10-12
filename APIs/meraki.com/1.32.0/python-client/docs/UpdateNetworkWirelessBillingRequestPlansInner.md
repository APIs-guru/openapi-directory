# UpdateNetworkWirelessBillingRequestPlansInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_limits** | [**UpdateNetworkWirelessBillingRequestPlansInnerBandwidthLimits**](UpdateNetworkWirelessBillingRequestPlansInnerBandwidthLimits.md) |  | 
**id** | **str** | The id of the pricing plan to update. | [optional] 
**price** | **float** | The price of the billing plan. | 
**time_limit** | **str** | The time limit of the pricing plan in minutes. Can be &#39;1 hour&#39;, &#39;1 day&#39;, &#39;1 week&#39;, or &#39;30 days&#39;. | 

## Example

```python
from openapi_client.models.update_network_wireless_billing_request_plans_inner import UpdateNetworkWirelessBillingRequestPlansInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessBillingRequestPlansInner from a JSON string
update_network_wireless_billing_request_plans_inner_instance = UpdateNetworkWirelessBillingRequestPlansInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessBillingRequestPlansInner.to_json())

# convert the object into a dict
update_network_wireless_billing_request_plans_inner_dict = update_network_wireless_billing_request_plans_inner_instance.to_dict()
# create an instance of UpdateNetworkWirelessBillingRequestPlansInner from a dict
update_network_wireless_billing_request_plans_inner_from_dict = UpdateNetworkWirelessBillingRequestPlansInner.from_dict(update_network_wireless_billing_request_plans_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


