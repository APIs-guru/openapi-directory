# GoogleCloudPaymentsResellerSubscriptionV1ProductPayload

Specifies product specific payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_one_payload** | [**GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload**](GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload.md) |  | [optional] 
**youtube_payload** | [**GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload**](GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_product_payload import GoogleCloudPaymentsResellerSubscriptionV1ProductPayload

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1ProductPayload from a JSON string
google_cloud_payments_reseller_subscription_v1_product_payload_instance = GoogleCloudPaymentsResellerSubscriptionV1ProductPayload.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1ProductPayload.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_product_payload_dict = google_cloud_payments_reseller_subscription_v1_product_payload_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1ProductPayload from a dict
google_cloud_payments_reseller_subscription_v1_product_payload_from_dict = GoogleCloudPaymentsResellerSubscriptionV1ProductPayload.from_dict(google_cloud_payments_reseller_subscription_v1_product_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


