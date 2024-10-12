# DeactivateSubscriptionOfferRequest

Request message for DeactivateSubscriptionOffer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_plan_id** | **str** | Required. The parent base plan (ID) of the offer to deactivate. | [optional] 
**latency_tolerance** | **str** | Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. | [optional] 
**offer_id** | **str** | Required. The unique offer ID of the offer to deactivate. | [optional] 
**package_name** | **str** | Required. The parent app (package name) of the offer to deactivate. | [optional] 
**product_id** | **str** | Required. The parent subscription (ID) of the offer to deactivate. | [optional] 

## Example

```python
from openapi_client.models.deactivate_subscription_offer_request import DeactivateSubscriptionOfferRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeactivateSubscriptionOfferRequest from a JSON string
deactivate_subscription_offer_request_instance = DeactivateSubscriptionOfferRequest.from_json(json)
# print the JSON string representation of the object
print(DeactivateSubscriptionOfferRequest.to_json())

# convert the object into a dict
deactivate_subscription_offer_request_dict = deactivate_subscription_offer_request_instance.to_dict()
# create an instance of DeactivateSubscriptionOfferRequest from a dict
deactivate_subscription_offer_request_from_dict = DeactivateSubscriptionOfferRequest.from_dict(deactivate_subscription_offer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


