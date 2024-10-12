# SubscriptionTransferInfo

Read-only transfer related information for the subscription. For more information, see retrieve transferable subscriptions for a customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_legacy_sku_id** | **str** | The &#x60;skuId&#x60; of the current resold subscription. This is populated only when the customer has a subscription with a legacy SKU and the subscription resource is populated with the &#x60;skuId&#x60; of the SKU recommended for the transfer. | [optional] 
**minimum_transferable_seats** | **int** | When inserting a subscription, this is the minimum number of seats listed in the transfer order for this product. For example, if the customer has 20 users, the reseller cannot place a transfer order of 15 seats. The minimum is 20 seats. | [optional] 
**transferability_expiration_time** | **str** | The time when transfer token or intent to transfer will expire. The time is in milliseconds using UNIX Epoch format. | [optional] 

## Example

```python
from openapi_client.models.subscription_transfer_info import SubscriptionTransferInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionTransferInfo from a JSON string
subscription_transfer_info_instance = SubscriptionTransferInfo.from_json(json)
# print the JSON string representation of the object
print(SubscriptionTransferInfo.to_json())

# convert the object into a dict
subscription_transfer_info_dict = subscription_transfer_info_instance.to_dict()
# create an instance of SubscriptionTransferInfo from a dict
subscription_transfer_info_from_dict = SubscriptionTransferInfo.from_dict(subscription_transfer_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


