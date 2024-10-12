# GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestLineItemEntitlementDetails

The details of the line item to be entitled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_item_index** | **int** | Required. The index of the line item to be entitled. | [optional] 
**products** | **List[str]** | Optional. Only applicable if the line item corresponds to a hard bundle. Product resource names that identify the bundle elements to be entitled in the line item. If unspecified, all bundle elements will be entitled. The format is &#39;partners/{partner_id}/products/{product_id}&#39;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_entitle_subscription_request_line_item_entitlement_details import GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestLineItemEntitlementDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestLineItemEntitlementDetails from a JSON string
google_cloud_payments_reseller_subscription_v1_entitle_subscription_request_line_item_entitlement_details_instance = GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestLineItemEntitlementDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestLineItemEntitlementDetails.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_entitle_subscription_request_line_item_entitlement_details_dict = google_cloud_payments_reseller_subscription_v1_entitle_subscription_request_line_item_entitlement_details_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestLineItemEntitlementDetails from a dict
google_cloud_payments_reseller_subscription_v1_entitle_subscription_request_line_item_entitlement_details_from_dict = GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestLineItemEntitlementDetails.from_dict(google_cloud_payments_reseller_subscription_v1_entitle_subscription_request_line_item_entitlement_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


