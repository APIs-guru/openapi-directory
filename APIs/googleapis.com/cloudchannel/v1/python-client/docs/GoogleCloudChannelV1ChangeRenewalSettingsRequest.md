# GoogleCloudChannelV1ChangeRenewalSettingsRequest

Request message for CloudChannelService.ChangeRenewalSettings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**renewal_settings** | [**GoogleCloudChannelV1RenewalSettings**](GoogleCloudChannelV1RenewalSettings.md) |  | [optional] 
**request_id** | **str** | Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it&#39;s complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (&#x60;00000000-0000-0000-0000-000000000000&#x60;). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_change_renewal_settings_request import GoogleCloudChannelV1ChangeRenewalSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ChangeRenewalSettingsRequest from a JSON string
google_cloud_channel_v1_change_renewal_settings_request_instance = GoogleCloudChannelV1ChangeRenewalSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ChangeRenewalSettingsRequest.to_json())

# convert the object into a dict
google_cloud_channel_v1_change_renewal_settings_request_dict = google_cloud_channel_v1_change_renewal_settings_request_instance.to_dict()
# create an instance of GoogleCloudChannelV1ChangeRenewalSettingsRequest from a dict
google_cloud_channel_v1_change_renewal_settings_request_from_dict = GoogleCloudChannelV1ChangeRenewalSettingsRequest.from_dict(google_cloud_channel_v1_change_renewal_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


