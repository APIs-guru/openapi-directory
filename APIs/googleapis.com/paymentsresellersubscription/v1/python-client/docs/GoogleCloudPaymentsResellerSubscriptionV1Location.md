# GoogleCloudPaymentsResellerSubscriptionV1Location

Describes a location of an end user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**postal_code** | **str** | The postal code this location refers to. Ex. \&quot;94043\&quot; | [optional] 
**region_code** | **str** | 2-letter ISO region code for current content region. Ex. “US” Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1 | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_location import GoogleCloudPaymentsResellerSubscriptionV1Location

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1Location from a JSON string
google_cloud_payments_reseller_subscription_v1_location_instance = GoogleCloudPaymentsResellerSubscriptionV1Location.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1Location.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_location_dict = google_cloud_payments_reseller_subscription_v1_location_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1Location from a dict
google_cloud_payments_reseller_subscription_v1_location_from_dict = GoogleCloudPaymentsResellerSubscriptionV1Location.from_dict(google_cloud_payments_reseller_subscription_v1_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


