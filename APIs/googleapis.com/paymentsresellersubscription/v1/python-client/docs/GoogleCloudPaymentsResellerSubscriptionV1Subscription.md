# GoogleCloudPaymentsResellerSubscriptionV1Subscription

A subscription serves as a central billing entity between an external partner and Google. The underlying Google services rely on the subscription state to grant or revoke the user's service entitlement. It's important to note that the subscription state may not always perfectly align with the user's service entitlement. For example, some Google services may continue providing access to the user until the current billing cycle ends, even if the subscription has been immediately canceled. However, other services may not do the same. To fully understand the specific details, please consult the relevant contract or product policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellation_details** | [**GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails**](GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails.md) |  | [optional] 
**create_time** | **str** | Output only. System generated timestamp when the subscription is created. UTC timezone. | [optional] [readonly] 
**cycle_end_time** | **str** | Output only. The time at which the subscription is expected to be extended, in ISO 8061 format. UTC timezone. For example: \&quot;2019-08-31T17:28:54.564Z\&quot; | [optional] [readonly] 
**end_user_entitled** | **bool** | Output only. Indicates if the subscription is entitled to the end user. | [optional] [readonly] 
**free_trial_end_time** | **str** | Output only. End of the free trial period, in ISO 8061 format. For example, \&quot;2019-08-31T17:28:54.564Z\&quot;. It will be set the same as createTime if no free trial promotion is specified. | [optional] [readonly] 
**line_items** | [**List[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem]**](GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem.md) | Required. The line items of the subscription. | [optional] 
**name** | **str** | Identifier. Resource name of the subscription. It will have the format of \&quot;partners/{partner_id}/subscriptions/{subscription_id}\&quot;. This is available for authorizeAddon, but otherwise is response only. | [optional] 
**partner_user_token** | **str** | Required. Identifier of the end-user in partner’s system. The value is restricted to 63 ASCII characters at the maximum. | [optional] 
**processing_state** | **str** | Output only. Describes the processing state of the subscription. See more details at [the lifecycle of a subscription](/payments/reseller/subscription/reference/index/Receive.Notifications#payments-subscription-lifecycle). | [optional] [readonly] 
**products** | **List[str]** | Optional. Deprecated: consider using &#x60;line_items&#x60; as the input. Required. Resource name that identifies the purchased products. The format will be &#39;partners/{partner_id}/products/{product_id}&#39;. | [optional] 
**promotion_specs** | [**List[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec]**](GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec.md) | Optional. Subscription-level promotions. Only free trial is supported on this level. It determines the first renewal time of the subscription to be the end of the free trial period. Specify the promotion resource name only when used as input. | [optional] 
**promotions** | **List[str]** | Optional. Deprecated: consider using the top-level &#x60;promotion_specs&#x60; as the input. Optional. Resource name that identifies one or more promotions that can be applied on the product. A typical promotion for a subscription is Free trial. The format will be &#39;partners/{partner_id}/promotions/{promotion_id}&#39;. | [optional] 
**redirect_uri** | **str** | Output only. The place where partners should redirect the end-user to after creation. This field might also be populated when creation failed. However, Partners should always prepare a default URL to redirect the user in case this field is empty. | [optional] [readonly] 
**renewal_time** | **str** | Output only. The time at which the subscription is expected to be renewed by Google - a new charge will be incurred and the service entitlement will be renewed. A non-immediate cancellation will take place at this time too, before which, the service entitlement for the end user will remain valid. UTC timezone in ISO 8061 format. For example: \&quot;2019-08-31T17:28:54.564Z\&quot; | [optional] [readonly] 
**service_location** | [**GoogleCloudPaymentsResellerSubscriptionV1Location**](GoogleCloudPaymentsResellerSubscriptionV1Location.md) |  | [optional] 
**state** | **str** | Output only. Describes the state of the subscription. See more details at [the lifecycle of a subscription](/payments/reseller/subscription/reference/index/Receive.Notifications#payments-subscription-lifecycle). | [optional] [readonly] 
**update_time** | **str** | Output only. System generated timestamp when the subscription is most recently updated. UTC timezone. | [optional] [readonly] 
**upgrade_downgrade_details** | [**GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails**](GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_subscription import GoogleCloudPaymentsResellerSubscriptionV1Subscription

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1Subscription from a JSON string
google_cloud_payments_reseller_subscription_v1_subscription_instance = GoogleCloudPaymentsResellerSubscriptionV1Subscription.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1Subscription.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_subscription_dict = google_cloud_payments_reseller_subscription_v1_subscription_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1Subscription from a dict
google_cloud_payments_reseller_subscription_v1_subscription_from_dict = GoogleCloudPaymentsResellerSubscriptionV1Subscription.from_dict(google_cloud_payments_reseller_subscription_v1_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


