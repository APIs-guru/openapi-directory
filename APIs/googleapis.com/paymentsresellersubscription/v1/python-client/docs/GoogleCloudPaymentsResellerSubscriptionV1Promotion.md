# GoogleCloudPaymentsResellerSubscriptionV1Promotion

A Promotion resource that defines a promotion for a subscription that can be resold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicable_products** | **List[str]** | Output only. The product ids this promotion can be applied to. | [optional] [readonly] 
**end_time** | **str** | Optional. Specifies the end time (exclusive) of the period that the promotion is available in. If unset, the promotion is available indefinitely. | [optional] 
**free_trial_duration** | [**GoogleCloudPaymentsResellerSubscriptionV1Duration**](GoogleCloudPaymentsResellerSubscriptionV1Duration.md) |  | [optional] 
**introductory_pricing_details** | [**GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails**](GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails.md) |  | [optional] 
**name** | **str** | Identifier. Response only. Resource name of the subscription promotion. It will have the format of \&quot;partners/{partner_id}/promotion/{promotion_id}\&quot; | [optional] 
**promotion_type** | **str** | Output only. Output Only. Specifies the type of the promotion. | [optional] [readonly] 
**region_codes** | **List[str]** | Output only. 2-letter ISO region code where the promotion is available in. Ex. \&quot;US\&quot; Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1 | [optional] [readonly] 
**start_time** | **str** | Optional. Specifies the start time (inclusive) of the period that the promotion is available in. | [optional] 
**titles** | [**List[GoogleTypeLocalizedText]**](GoogleTypeLocalizedText.md) | Output only. Localized human readable name of the promotion. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_promotion import GoogleCloudPaymentsResellerSubscriptionV1Promotion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1Promotion from a JSON string
google_cloud_payments_reseller_subscription_v1_promotion_instance = GoogleCloudPaymentsResellerSubscriptionV1Promotion.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1Promotion.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_promotion_dict = google_cloud_payments_reseller_subscription_v1_promotion_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1Promotion from a dict
google_cloud_payments_reseller_subscription_v1_promotion_from_dict = GoogleCloudPaymentsResellerSubscriptionV1Promotion.from_dict(google_cloud_payments_reseller_subscription_v1_promotion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


