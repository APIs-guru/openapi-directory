# GoogleCloudChannelV1QueryEligibleBillingAccountsResponse

Response message for QueryEligibleBillingAccounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku_purchase_groups** | [**List[GoogleCloudChannelV1SkuPurchaseGroup]**](GoogleCloudChannelV1SkuPurchaseGroup.md) | List of SKU purchase groups where each group represents a set of SKUs that must be purchased using the same billing account. Each SKU from [QueryEligibleBillingAccountsRequest.skus] will appear in exactly one SKU group. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_query_eligible_billing_accounts_response import GoogleCloudChannelV1QueryEligibleBillingAccountsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1QueryEligibleBillingAccountsResponse from a JSON string
google_cloud_channel_v1_query_eligible_billing_accounts_response_instance = GoogleCloudChannelV1QueryEligibleBillingAccountsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1QueryEligibleBillingAccountsResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_query_eligible_billing_accounts_response_dict = google_cloud_channel_v1_query_eligible_billing_accounts_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1QueryEligibleBillingAccountsResponse from a dict
google_cloud_channel_v1_query_eligible_billing_accounts_response_from_dict = GoogleCloudChannelV1QueryEligibleBillingAccountsResponse.from_dict(google_cloud_channel_v1_query_eligible_billing_accounts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


