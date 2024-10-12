# GoogleCloudChannelV1BillingAccount

Represents a billing account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when this billing account was created. | [optional] [readonly] 
**currency_code** | **str** | Output only. The 3-letter currency code defined in ISO 4217. | [optional] [readonly] 
**display_name** | **str** | Display name of the billing account. | [optional] 
**name** | **str** | Output only. Resource name of the billing account. Format: accounts/{account_id}/billingAccounts/{billing_account_id}. | [optional] [readonly] 
**region_code** | **str** | Output only. The CLDR region code. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_billing_account import GoogleCloudChannelV1BillingAccount

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1BillingAccount from a JSON string
google_cloud_channel_v1_billing_account_instance = GoogleCloudChannelV1BillingAccount.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1BillingAccount.to_json())

# convert the object into a dict
google_cloud_channel_v1_billing_account_dict = google_cloud_channel_v1_billing_account_instance.to_dict()
# create an instance of GoogleCloudChannelV1BillingAccount from a dict
google_cloud_channel_v1_billing_account_from_dict = GoogleCloudChannelV1BillingAccount.from_dict(google_cloud_channel_v1_billing_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


