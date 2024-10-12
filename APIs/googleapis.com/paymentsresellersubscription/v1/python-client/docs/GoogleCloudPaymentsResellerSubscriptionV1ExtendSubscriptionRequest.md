# GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest

Request message for extending a Subscription resource. A new recurrence will be made based on the subscription schedule defined by the original product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extension** | [**GoogleCloudPaymentsResellerSubscriptionV1Extension**](GoogleCloudPaymentsResellerSubscriptionV1Extension.md) |  | [optional] 
**request_id** | **str** | Required. Restricted to 36 ASCII characters. A random UUID is recommended. The idempotency key for the request. The ID generation logic is controlled by the partner. request_id should be the same as on retries of the same request. A different request_id must be used for a extension of a different cycle. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_extend_subscription_request import GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest from a JSON string
google_cloud_payments_reseller_subscription_v1_extend_subscription_request_instance = GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_extend_subscription_request_dict = google_cloud_payments_reseller_subscription_v1_extend_subscription_request_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest from a dict
google_cloud_payments_reseller_subscription_v1_extend_subscription_request_from_dict = GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest.from_dict(google_cloud_payments_reseller_subscription_v1_extend_subscription_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


