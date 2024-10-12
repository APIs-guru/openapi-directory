# GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse

Response that contains the entitled subscription resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription** | [**GoogleCloudPaymentsResellerSubscriptionV1Subscription**](GoogleCloudPaymentsResellerSubscriptionV1Subscription.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_entitle_subscription_response import GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse from a JSON string
google_cloud_payments_reseller_subscription_v1_entitle_subscription_response_instance = GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_entitle_subscription_response_dict = google_cloud_payments_reseller_subscription_v1_entitle_subscription_response_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse from a dict
google_cloud_payments_reseller_subscription_v1_entitle_subscription_response_from_dict = GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse.from_dict(google_cloud_payments_reseller_subscription_v1_entitle_subscription_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


