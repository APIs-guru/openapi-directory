# GoogleCloudChannelV1AdminUser

Information needed to create an Admin User for Google Workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Primary email of the admin user. | [optional] 
**family_name** | **str** | Family name of the admin user. | [optional] 
**given_name** | **str** | Given name of the admin user. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_admin_user import GoogleCloudChannelV1AdminUser

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1AdminUser from a JSON string
google_cloud_channel_v1_admin_user_instance = GoogleCloudChannelV1AdminUser.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1AdminUser.to_json())

# convert the object into a dict
google_cloud_channel_v1_admin_user_dict = google_cloud_channel_v1_admin_user_instance.to_dict()
# create an instance of GoogleCloudChannelV1AdminUser from a dict
google_cloud_channel_v1_admin_user_from_dict = GoogleCloudChannelV1AdminUser.from_dict(google_cloud_channel_v1_admin_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


