# GoogleCloudPaymentsResellerSubscriptionV1Amount

Describes the amount unit including the currency code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_micros** | **str** | Required. Amount in micros (1_000_000 micros &#x3D; 1 currency unit) | [optional] 
**currency_code** | **str** | Required. Currency codes in accordance with [ISO-4217 Currency Codes] (https://en.wikipedia.org/wiki/ISO_4217). For example, USD. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_amount import GoogleCloudPaymentsResellerSubscriptionV1Amount

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1Amount from a JSON string
google_cloud_payments_reseller_subscription_v1_amount_instance = GoogleCloudPaymentsResellerSubscriptionV1Amount.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1Amount.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_amount_dict = google_cloud_payments_reseller_subscription_v1_amount_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1Amount from a dict
google_cloud_payments_reseller_subscription_v1_amount_from_dict = GoogleCloudPaymentsResellerSubscriptionV1Amount.from_dict(google_cloud_payments_reseller_subscription_v1_amount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


