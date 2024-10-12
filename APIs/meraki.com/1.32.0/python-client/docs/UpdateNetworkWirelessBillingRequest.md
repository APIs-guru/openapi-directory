# UpdateNetworkWirelessBillingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The currency code of this node group&#39;s billing plans | [optional] 
**plans** | [**List[UpdateNetworkWirelessBillingRequestPlansInner]**](UpdateNetworkWirelessBillingRequestPlansInner.md) | Array of billing plans in the node group. (Can configure a maximum of 5) | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_billing_request import UpdateNetworkWirelessBillingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessBillingRequest from a JSON string
update_network_wireless_billing_request_instance = UpdateNetworkWirelessBillingRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessBillingRequest.to_json())

# convert the object into a dict
update_network_wireless_billing_request_dict = update_network_wireless_billing_request_instance.to_dict()
# create an instance of UpdateNetworkWirelessBillingRequest from a dict
update_network_wireless_billing_request_from_dict = UpdateNetworkWirelessBillingRequest.from_dict(update_network_wireless_billing_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


