# UpdateSubscriptionOfferRequest

Request message for UpdateSubscriptionOffer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_missing** | **bool** | Optional. If set to true, and the subscription offer with the given package_name, product_id, base_plan_id and offer_id doesn&#39;t exist, an offer will be created. If a new offer is created, update_mask is ignored. | [optional] 
**latency_tolerance** | **str** | Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. | [optional] 
**regions_version** | [**RegionsVersion**](RegionsVersion.md) |  | [optional] 
**subscription_offer** | [**SubscriptionOffer**](SubscriptionOffer.md) |  | [optional] 
**update_mask** | **str** | Required. The list of fields to be updated. | [optional] 

## Example

```python
from openapi_client.models.update_subscription_offer_request import UpdateSubscriptionOfferRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSubscriptionOfferRequest from a JSON string
update_subscription_offer_request_instance = UpdateSubscriptionOfferRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateSubscriptionOfferRequest.to_json())

# convert the object into a dict
update_subscription_offer_request_dict = update_subscription_offer_request_instance.to_dict()
# create an instance of UpdateSubscriptionOfferRequest from a dict
update_subscription_offer_request_from_dict = UpdateSubscriptionOfferRequest.from_dict(update_subscription_offer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


