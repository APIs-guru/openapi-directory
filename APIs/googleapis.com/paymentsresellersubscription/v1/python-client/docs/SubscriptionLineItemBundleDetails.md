# SubscriptionLineItemBundleDetails

The bundle details for a line item corresponding to a hard bundle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_element_details** | [**List[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemBundleDetailsBundleElementDetails]**](GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemBundleDetailsBundleElementDetails.md) | Output only. The details for each element in the hard bundle. | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription_line_item_bundle_details import SubscriptionLineItemBundleDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionLineItemBundleDetails from a JSON string
subscription_line_item_bundle_details_instance = SubscriptionLineItemBundleDetails.from_json(json)
# print the JSON string representation of the object
print(SubscriptionLineItemBundleDetails.to_json())

# convert the object into a dict
subscription_line_item_bundle_details_dict = subscription_line_item_bundle_details_instance.to_dict()
# create an instance of SubscriptionLineItemBundleDetails from a dict
subscription_line_item_bundle_details_from_dict = SubscriptionLineItemBundleDetails.from_dict(subscription_line_item_bundle_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


