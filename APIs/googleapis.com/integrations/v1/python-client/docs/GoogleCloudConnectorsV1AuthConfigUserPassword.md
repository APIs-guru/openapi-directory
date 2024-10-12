# GoogleCloudConnectorsV1AuthConfigUserPassword

Parameters to support Username and Password Authentication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | [**GoogleCloudConnectorsV1Secret**](GoogleCloudConnectorsV1Secret.md) |  | [optional] 
**username** | **str** | Username. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_connectors_v1_auth_config_user_password import GoogleCloudConnectorsV1AuthConfigUserPassword

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudConnectorsV1AuthConfigUserPassword from a JSON string
google_cloud_connectors_v1_auth_config_user_password_instance = GoogleCloudConnectorsV1AuthConfigUserPassword.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudConnectorsV1AuthConfigUserPassword.to_json())

# convert the object into a dict
google_cloud_connectors_v1_auth_config_user_password_dict = google_cloud_connectors_v1_auth_config_user_password_instance.to_dict()
# create an instance of GoogleCloudConnectorsV1AuthConfigUserPassword from a dict
google_cloud_connectors_v1_auth_config_user_password_from_dict = GoogleCloudConnectorsV1AuthConfigUserPassword.from_dict(google_cloud_connectors_v1_auth_config_user_password_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


