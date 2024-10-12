# GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails

The details of a introductory pricing promotion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**introductory_pricing_specs** | [**List[GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec]**](GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec.md) | Output only. Specifies the introductory pricing periods. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_promotion_introductory_pricing_details import GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails from a JSON string
google_cloud_payments_reseller_subscription_v1_promotion_introductory_pricing_details_instance = GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_promotion_introductory_pricing_details_dict = google_cloud_payments_reseller_subscription_v1_promotion_introductory_pricing_details_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails from a dict
google_cloud_payments_reseller_subscription_v1_promotion_introductory_pricing_details_from_dict = GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails.from_dict(google_cloud_payments_reseller_subscription_v1_promotion_introductory_pricing_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


