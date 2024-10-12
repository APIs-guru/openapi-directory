# GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription

A BeyondCorp Subscription resource represents BeyondCorp Enterprise Subscription. BeyondCorp Enterprise Subscription enables BeyondCorp Enterprise permium features for an organization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_renew_enabled** | **bool** | Output only. Represents that, if subscription will renew or end when the term ends. | [optional] [readonly] 
**create_time** | **str** | Output only. Create time of the subscription. | [optional] [readonly] 
**end_time** | **str** | Output only. End time of the subscription. | [optional] [readonly] 
**name** | **str** | Required. Unique resource name of the Subscription. The name is ignored when creating a subscription. | [optional] 
**seat_count** | **str** | Optional. Number of seats in the subscription. | [optional] 
**sku** | **str** | Required. SKU of subscription. | [optional] 
**start_time** | **str** | Output only. Start time of the subscription. | [optional] [readonly] 
**state** | **str** | Output only. The current state of the subscription. | [optional] [readonly] 
**type** | **str** | Required. Type of subscription. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_subscription import GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription from a JSON string
google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_subscription_instance = GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription.to_json())

# convert the object into a dict
google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_subscription_dict = google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_subscription_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription from a dict
google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_subscription_from_dict = GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription.from_dict(google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


