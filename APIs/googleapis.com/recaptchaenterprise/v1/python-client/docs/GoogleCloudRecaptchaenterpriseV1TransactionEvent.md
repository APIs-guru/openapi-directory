# GoogleCloudRecaptchaenterpriseV1TransactionEvent

Describes an event in the lifecycle of a payment transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_time** | **str** | Optional. Timestamp when this transaction event occurred; otherwise assumed to be the time of the API call. | [optional] 
**event_type** | **str** | Optional. The type of this transaction event. | [optional] 
**reason** | **str** | Optional. The reason or standardized code that corresponds with this transaction event, if one exists. For example, a CHARGEBACK event with code 6005. | [optional] 
**value** | **float** | Optional. The value that corresponds with this transaction event, if one exists. For example, a refund event where $5.00 was refunded. Currency is obtained from the original transaction data. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_transaction_event import GoogleCloudRecaptchaenterpriseV1TransactionEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1TransactionEvent from a JSON string
google_cloud_recaptchaenterprise_v1_transaction_event_instance = GoogleCloudRecaptchaenterpriseV1TransactionEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1TransactionEvent.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_transaction_event_dict = google_cloud_recaptchaenterprise_v1_transaction_event_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1TransactionEvent from a dict
google_cloud_recaptchaenterprise_v1_transaction_event_from_dict = GoogleCloudRecaptchaenterpriseV1TransactionEvent.from_dict(google_cloud_recaptchaenterprise_v1_transaction_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


