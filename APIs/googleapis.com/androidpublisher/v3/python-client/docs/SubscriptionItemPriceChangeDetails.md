# SubscriptionItemPriceChangeDetails

Price change related information of a subscription item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expected_new_price_charge_time** | **str** | The renewal time at which the price change will become effective for the user. This is subject to change(to a future time) due to cases where the renewal time shifts like pause. This field is only populated if the price change has not taken effect. | [optional] 
**new_price** | [**Money**](Money.md) |  | [optional] 
**price_change_mode** | **str** | Price change mode specifies how the subscription item price is changing. | [optional] 
**price_change_state** | **str** | State the price change is currently in. | [optional] 

## Example

```python
from openapi_client.models.subscription_item_price_change_details import SubscriptionItemPriceChangeDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionItemPriceChangeDetails from a JSON string
subscription_item_price_change_details_instance = SubscriptionItemPriceChangeDetails.from_json(json)
# print the JSON string representation of the object
print(SubscriptionItemPriceChangeDetails.to_json())

# convert the object into a dict
subscription_item_price_change_details_dict = subscription_item_price_change_details_instance.to_dict()
# create an instance of SubscriptionItemPriceChangeDetails from a dict
subscription_item_price_change_details_from_dict = SubscriptionItemPriceChangeDetails.from_dict(subscription_item_price_change_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


