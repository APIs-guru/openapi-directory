# ActivateSubscriptionOfferRequest

Request message for ActivateSubscriptionOffer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_plan_id** | **str** | Required. The parent base plan (ID) of the offer to activate. | [optional] 
**latency_tolerance** | **str** | Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. | [optional] 
**offer_id** | **str** | Required. The unique offer ID of the offer to activate. | [optional] 
**package_name** | **str** | Required. The parent app (package name) of the offer to activate. | [optional] 
**product_id** | **str** | Required. The parent subscription (ID) of the offer to activate. | [optional] 

## Example

```python
from openapi_client.models.activate_subscription_offer_request import ActivateSubscriptionOfferRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ActivateSubscriptionOfferRequest from a JSON string
activate_subscription_offer_request_instance = ActivateSubscriptionOfferRequest.from_json(json)
# print the JSON string representation of the object
print(ActivateSubscriptionOfferRequest.to_json())

# convert the object into a dict
activate_subscription_offer_request_dict = activate_subscription_offer_request_instance.to_dict()
# create an instance of ActivateSubscriptionOfferRequest from a dict
activate_subscription_offer_request_from_dict = ActivateSubscriptionOfferRequest.from_dict(activate_subscription_offer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


