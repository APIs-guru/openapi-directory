# GoogleCloudApigeeV1AdjustDeveloperBalanceRequest

Request for AdjustDeveloperBalance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjustment** | [**GoogleTypeMoney**](GoogleTypeMoney.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_adjust_developer_balance_request import GoogleCloudApigeeV1AdjustDeveloperBalanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1AdjustDeveloperBalanceRequest from a JSON string
google_cloud_apigee_v1_adjust_developer_balance_request_instance = GoogleCloudApigeeV1AdjustDeveloperBalanceRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1AdjustDeveloperBalanceRequest.to_json())

# convert the object into a dict
google_cloud_apigee_v1_adjust_developer_balance_request_dict = google_cloud_apigee_v1_adjust_developer_balance_request_instance.to_dict()
# create an instance of GoogleCloudApigeeV1AdjustDeveloperBalanceRequest from a dict
google_cloud_apigee_v1_adjust_developer_balance_request_from_dict = GoogleCloudApigeeV1AdjustDeveloperBalanceRequest.from_dict(google_cloud_apigee_v1_adjust_developer_balance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


