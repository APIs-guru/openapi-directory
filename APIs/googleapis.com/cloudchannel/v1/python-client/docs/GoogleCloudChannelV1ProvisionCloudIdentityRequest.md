# GoogleCloudChannelV1ProvisionCloudIdentityRequest

Request message for CloudChannelService.ProvisionCloudIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_identity_info** | [**GoogleCloudChannelV1CloudIdentityInfo**](GoogleCloudChannelV1CloudIdentityInfo.md) |  | [optional] 
**user** | [**GoogleCloudChannelV1AdminUser**](GoogleCloudChannelV1AdminUser.md) |  | [optional] 
**validate_only** | **bool** | Validate the request and preview the review, but do not post it. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_provision_cloud_identity_request import GoogleCloudChannelV1ProvisionCloudIdentityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ProvisionCloudIdentityRequest from a JSON string
google_cloud_channel_v1_provision_cloud_identity_request_instance = GoogleCloudChannelV1ProvisionCloudIdentityRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ProvisionCloudIdentityRequest.to_json())

# convert the object into a dict
google_cloud_channel_v1_provision_cloud_identity_request_dict = google_cloud_channel_v1_provision_cloud_identity_request_instance.to_dict()
# create an instance of GoogleCloudChannelV1ProvisionCloudIdentityRequest from a dict
google_cloud_channel_v1_provision_cloud_identity_request_from_dict = GoogleCloudChannelV1ProvisionCloudIdentityRequest.from_dict(google_cloud_channel_v1_provision_cloud_identity_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


