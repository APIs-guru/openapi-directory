# GoogleCloudApigeeV1DeveloperBalanceWallet

Wallet used to manage an account balance for a particular currency.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | [**GoogleTypeMoney**](GoogleTypeMoney.md) |  | [optional] 
**last_credit_time** | **str** | Output only. Time at which the developer last added credit to the account in milliseconds since epoch. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_developer_balance_wallet import GoogleCloudApigeeV1DeveloperBalanceWallet

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DeveloperBalanceWallet from a JSON string
google_cloud_apigee_v1_developer_balance_wallet_instance = GoogleCloudApigeeV1DeveloperBalanceWallet.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DeveloperBalanceWallet.to_json())

# convert the object into a dict
google_cloud_apigee_v1_developer_balance_wallet_dict = google_cloud_apigee_v1_developer_balance_wallet_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DeveloperBalanceWallet from a dict
google_cloud_apigee_v1_developer_balance_wallet_from_dict = GoogleCloudApigeeV1DeveloperBalanceWallet.from_dict(google_cloud_apigee_v1_developer_balance_wallet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


