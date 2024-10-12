# GoogleCloudApigeeV1DeveloperBalance

Account balance for the developer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wallets** | [**List[GoogleCloudApigeeV1DeveloperBalanceWallet]**](GoogleCloudApigeeV1DeveloperBalanceWallet.md) | Output only. List of all wallets. Each individual wallet stores the account balance for a particular currency. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_developer_balance import GoogleCloudApigeeV1DeveloperBalance

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DeveloperBalance from a JSON string
google_cloud_apigee_v1_developer_balance_instance = GoogleCloudApigeeV1DeveloperBalance.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DeveloperBalance.to_json())

# convert the object into a dict
google_cloud_apigee_v1_developer_balance_dict = google_cloud_apigee_v1_developer_balance_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DeveloperBalance from a dict
google_cloud_apigee_v1_developer_balance_from_dict = GoogleCloudApigeeV1DeveloperBalance.from_dict(google_cloud_apigee_v1_developer_balance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


