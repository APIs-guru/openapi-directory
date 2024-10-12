# GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem

Individual line item definition of a subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**GoogleCloudPaymentsResellerSubscriptionV1Amount**](GoogleCloudPaymentsResellerSubscriptionV1Amount.md) |  | [optional] 
**bundle_details** | [**SubscriptionLineItemBundleDetails**](SubscriptionLineItemBundleDetails.md) |  | [optional] 
**description** | **str** | Output only. Description of this line item. | [optional] [readonly] 
**finite_billing_cycle_details** | [**GoogleCloudPaymentsResellerSubscriptionV1FiniteBillingCycleDetails**](GoogleCloudPaymentsResellerSubscriptionV1FiniteBillingCycleDetails.md) |  | [optional] 
**line_item_free_trial_end_time** | **str** | Output only. The free trial end time will be populated after the line item is successfully processed. End time of the line item free trial period, in ISO 8061 format. For example, \&quot;2019-08-31T17:28:54.564Z\&quot;. It will be set the same as createTime if no free trial promotion is specified. | [optional] [readonly] 
**line_item_index** | **int** | Output only. A unique index of the subscription line item. | [optional] [readonly] 
**line_item_promotion_specs** | [**List[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec]**](GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec.md) | Optional. The promotions applied on the line item. It can be: - a free trial promotion, which overrides the subscription-level free trial promotion. - an introductory pricing promotion. When used as input in Create or Provision API, specify its resource name only. | [optional] 
**one_time_recurrence_details** | [**GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails**](GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails.md) |  | [optional] 
**product** | **str** | Required. Product resource name that identifies one the line item The format is &#39;partners/{partner_id}/products/{product_id}&#39;. | [optional] 
**product_payload** | [**GoogleCloudPaymentsResellerSubscriptionV1ProductPayload**](GoogleCloudPaymentsResellerSubscriptionV1ProductPayload.md) |  | [optional] 
**recurrence_type** | **str** | Output only. The recurrence type of the line item. | [optional] [readonly] 
**state** | **str** | Output only. The state of the line item. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_subscription_line_item import GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem from a JSON string
google_cloud_payments_reseller_subscription_v1_subscription_line_item_instance = GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_subscription_line_item_dict = google_cloud_payments_reseller_subscription_v1_subscription_line_item_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem from a dict
google_cloud_payments_reseller_subscription_v1_subscription_line_item_from_dict = GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem.from_dict(google_cloud_payments_reseller_subscription_v1_subscription_line_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


