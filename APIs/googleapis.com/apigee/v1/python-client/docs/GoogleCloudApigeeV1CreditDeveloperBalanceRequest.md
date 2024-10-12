# GoogleCloudApigeeV1CreditDeveloperBalanceRequest

Request for CreditDeveloperBalance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_amount** | [**GoogleTypeMoney**](GoogleTypeMoney.md) |  | [optional] 
**transaction_id** | **str** | Each transaction_id uniquely identifies a credit balance request. If multiple requests are received with the same transaction_id, only one of them will be considered. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_credit_developer_balance_request import GoogleCloudApigeeV1CreditDeveloperBalanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1CreditDeveloperBalanceRequest from a JSON string
google_cloud_apigee_v1_credit_developer_balance_request_instance = GoogleCloudApigeeV1CreditDeveloperBalanceRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1CreditDeveloperBalanceRequest.to_json())

# convert the object into a dict
google_cloud_apigee_v1_credit_developer_balance_request_dict = google_cloud_apigee_v1_credit_developer_balance_request_instance.to_dict()
# create an instance of GoogleCloudApigeeV1CreditDeveloperBalanceRequest from a dict
google_cloud_apigee_v1_credit_developer_balance_request_from_dict = GoogleCloudApigeeV1CreditDeveloperBalanceRequest.from_dict(google_cloud_apigee_v1_credit_developer_balance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


