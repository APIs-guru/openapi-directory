# GoogleCloudPaymentsResellerSubscriptionV1Extension

Describes the details of an extension request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | [**GoogleCloudPaymentsResellerSubscriptionV1Duration**](GoogleCloudPaymentsResellerSubscriptionV1Duration.md) |  | [optional] 
**partner_user_token** | **str** | Required. Identifier of the end-user in partner’s system. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_extension import GoogleCloudPaymentsResellerSubscriptionV1Extension

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1Extension from a JSON string
google_cloud_payments_reseller_subscription_v1_extension_instance = GoogleCloudPaymentsResellerSubscriptionV1Extension.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1Extension.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_extension_dict = google_cloud_payments_reseller_subscription_v1_extension_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1Extension from a dict
google_cloud_payments_reseller_subscription_v1_extension_from_dict = GoogleCloudPaymentsResellerSubscriptionV1Extension.from_dict(google_cloud_payments_reseller_subscription_v1_extension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


