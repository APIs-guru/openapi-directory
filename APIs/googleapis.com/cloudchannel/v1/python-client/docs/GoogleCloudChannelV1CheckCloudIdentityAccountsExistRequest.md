# GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest

Request message for CloudChannelService.CheckCloudIdentityAccountsExist.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | Required. Domain to fetch for Cloud Identity account customers, including domained and domainless. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_check_cloud_identity_accounts_exist_request import GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest from a JSON string
google_cloud_channel_v1_check_cloud_identity_accounts_exist_request_instance = GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest.to_json())

# convert the object into a dict
google_cloud_channel_v1_check_cloud_identity_accounts_exist_request_dict = google_cloud_channel_v1_check_cloud_identity_accounts_exist_request_instance.to_dict()
# create an instance of GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest from a dict
google_cloud_channel_v1_check_cloud_identity_accounts_exist_request_from_dict = GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest.from_dict(google_cloud_channel_v1_check_cloud_identity_accounts_exist_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


