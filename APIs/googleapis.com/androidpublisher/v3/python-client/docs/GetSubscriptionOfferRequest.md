# GetSubscriptionOfferRequest

Request message for GetSubscriptionOffer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_plan_id** | **str** | Required. The parent base plan (ID) of the offer to get. | [optional] 
**offer_id** | **str** | Required. The unique offer ID of the offer to get. | [optional] 
**package_name** | **str** | Required. The parent app (package name) of the offer to get. | [optional] 
**product_id** | **str** | Required. The parent subscription (ID) of the offer to get. | [optional] 

## Example

```python
from openapi_client.models.get_subscription_offer_request import GetSubscriptionOfferRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetSubscriptionOfferRequest from a JSON string
get_subscription_offer_request_instance = GetSubscriptionOfferRequest.from_json(json)
# print the JSON string representation of the object
print(GetSubscriptionOfferRequest.to_json())

# convert the object into a dict
get_subscription_offer_request_dict = get_subscription_offer_request_instance.to_dict()
# create an instance of GetSubscriptionOfferRequest from a dict
get_subscription_offer_request_from_dict = GetSubscriptionOfferRequest.from_dict(get_subscription_offer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


