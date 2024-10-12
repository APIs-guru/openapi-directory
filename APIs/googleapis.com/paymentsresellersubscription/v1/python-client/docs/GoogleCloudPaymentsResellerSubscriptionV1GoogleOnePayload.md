# GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload

Payload specific to Google One products.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaigns** | **List[str]** | Campaign attributed to sales of this subscription. | [optional] 
**offering** | **str** | The type of offering the subscription was sold by the partner. e.g. VAS. | [optional] 
**sales_channel** | **str** | The type of sales channel through which the subscription was sold. | [optional] 
**store_id** | **str** | The identifier for the partner store where the subscription was sold. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_google_one_payload import GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload from a JSON string
google_cloud_payments_reseller_subscription_v1_google_one_payload_instance = GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_google_one_payload_dict = google_cloud_payments_reseller_subscription_v1_google_one_payload_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload from a dict
google_cloud_payments_reseller_subscription_v1_google_one_payload_from_dict = GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload.from_dict(google_cloud_payments_reseller_subscription_v1_google_one_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


