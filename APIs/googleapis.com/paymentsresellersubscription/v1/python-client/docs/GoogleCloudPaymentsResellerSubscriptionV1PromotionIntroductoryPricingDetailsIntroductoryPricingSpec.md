# GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec

The duration of an introductory pricing promotion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount_amount** | [**GoogleCloudPaymentsResellerSubscriptionV1Amount**](GoogleCloudPaymentsResellerSubscriptionV1Amount.md) |  | [optional] 
**discount_ratio_micros** | **str** | Output only. The discount percentage in micros. For example, 50,000 represents 5%. | [optional] [readonly] 
**recurrence_count** | **int** | Output only. Output Only. The duration of an introductory offer in billing cycles. | [optional] [readonly] 
**region_code** | **str** | Output only. 2-letter ISO region code where the product is available in. Ex. \&quot;US\&quot;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_promotion_introductory_pricing_details_introductory_pricing_spec import GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec from a JSON string
google_cloud_payments_reseller_subscription_v1_promotion_introductory_pricing_details_introductory_pricing_spec_instance = GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_promotion_introductory_pricing_details_introductory_pricing_spec_dict = google_cloud_payments_reseller_subscription_v1_promotion_introductory_pricing_details_introductory_pricing_spec_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec from a dict
google_cloud_payments_reseller_subscription_v1_promotion_introductory_pricing_details_introductory_pricing_spec_from_dict = GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec.from_dict(google_cloud_payments_reseller_subscription_v1_promotion_introductory_pricing_details_introductory_pricing_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


