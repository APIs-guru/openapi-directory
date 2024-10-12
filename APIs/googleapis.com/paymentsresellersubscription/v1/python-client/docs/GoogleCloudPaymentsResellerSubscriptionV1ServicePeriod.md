# GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod

A description of what time period or moment in time the product or service is being delivered over.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Optional. The end time of the service period. Time is exclusive. | [optional] 
**start_time** | **str** | Required. The start time of the service period. Time is inclusive. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_service_period import GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod from a JSON string
google_cloud_payments_reseller_subscription_v1_service_period_instance = GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_service_period_dict = google_cloud_payments_reseller_subscription_v1_service_period_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod from a dict
google_cloud_payments_reseller_subscription_v1_service_period_from_dict = GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod.from_dict(google_cloud_payments_reseller_subscription_v1_service_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


