# GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest

Partner request for entitling the previously provisioned subscription to an end user. The end user identity is inferred from the request OAuth context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_item_entitlement_details** | [**List[GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestLineItemEntitlementDetails]**](GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestLineItemEntitlementDetails.md) | Optional. The line items to be entitled. If unspecified, all line items will be entitled. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_entitle_subscription_request import GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest from a JSON string
google_cloud_payments_reseller_subscription_v1_entitle_subscription_request_instance = GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_entitle_subscription_request_dict = google_cloud_payments_reseller_subscription_v1_entitle_subscription_request_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest from a dict
google_cloud_payments_reseller_subscription_v1_entitle_subscription_request_from_dict = GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest.from_dict(google_cloud_payments_reseller_subscription_v1_entitle_subscription_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


