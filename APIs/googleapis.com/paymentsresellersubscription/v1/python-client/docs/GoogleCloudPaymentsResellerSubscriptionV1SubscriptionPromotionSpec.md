# GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec

Describes the spec for one promotion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**free_trial_duration** | [**GoogleCloudPaymentsResellerSubscriptionV1Duration**](GoogleCloudPaymentsResellerSubscriptionV1Duration.md) |  | [optional] 
**introductory_pricing_details** | [**GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails**](GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails.md) |  | [optional] 
**promotion** | **str** | Required. Promotion resource name that identifies a promotion. The format is &#39;partners/{partner_id}/promotions/{promotion_id}&#39;. | [optional] 
**type** | **str** | Output only. The type of the promotion for the spec. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_subscription_promotion_spec import GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec from a JSON string
google_cloud_payments_reseller_subscription_v1_subscription_promotion_spec_instance = GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_subscription_promotion_spec_dict = google_cloud_payments_reseller_subscription_v1_subscription_promotion_spec_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec from a dict
google_cloud_payments_reseller_subscription_v1_subscription_promotion_spec_from_dict = GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec.from_dict(google_cloud_payments_reseller_subscription_v1_subscription_promotion_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


