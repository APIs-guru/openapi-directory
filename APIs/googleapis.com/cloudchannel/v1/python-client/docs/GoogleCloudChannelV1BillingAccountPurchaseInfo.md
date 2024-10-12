# GoogleCloudChannelV1BillingAccountPurchaseInfo

Represents a billing account that can be used to make a purchase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | [**GoogleCloudChannelV1BillingAccount**](GoogleCloudChannelV1BillingAccount.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_billing_account_purchase_info import GoogleCloudChannelV1BillingAccountPurchaseInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1BillingAccountPurchaseInfo from a JSON string
google_cloud_channel_v1_billing_account_purchase_info_instance = GoogleCloudChannelV1BillingAccountPurchaseInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1BillingAccountPurchaseInfo.to_json())

# convert the object into a dict
google_cloud_channel_v1_billing_account_purchase_info_dict = google_cloud_channel_v1_billing_account_purchase_info_instance.to_dict()
# create an instance of GoogleCloudChannelV1BillingAccountPurchaseInfo from a dict
google_cloud_channel_v1_billing_account_purchase_info_from_dict = GoogleCloudChannelV1BillingAccountPurchaseInfo.from_dict(google_cloud_channel_v1_billing_account_purchase_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


