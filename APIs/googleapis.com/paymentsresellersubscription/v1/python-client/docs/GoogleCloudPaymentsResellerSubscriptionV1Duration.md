# GoogleCloudPaymentsResellerSubscriptionV1Duration

Describes the length of a period of a time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | number of duration units to be included. | [optional] 
**unit** | **str** | The unit used for the duration | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_duration import GoogleCloudPaymentsResellerSubscriptionV1Duration

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1Duration from a JSON string
google_cloud_payments_reseller_subscription_v1_duration_instance = GoogleCloudPaymentsResellerSubscriptionV1Duration.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1Duration.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_duration_dict = google_cloud_payments_reseller_subscription_v1_duration_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1Duration from a dict
google_cloud_payments_reseller_subscription_v1_duration_from_dict = GoogleCloudPaymentsResellerSubscriptionV1Duration.from_dict(google_cloud_payments_reseller_subscription_v1_duration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


