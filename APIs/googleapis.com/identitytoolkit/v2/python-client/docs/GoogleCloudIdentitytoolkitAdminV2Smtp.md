# GoogleCloudIdentitytoolkitAdminV2Smtp

Configuration for SMTP relay

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | SMTP relay host | [optional] 
**password** | **str** | SMTP relay password | [optional] 
**port** | **int** | SMTP relay port | [optional] 
**security_mode** | **str** | SMTP security mode. | [optional] 
**sender_email** | **str** | Sender email for the SMTP relay | [optional] 
**username** | **str** | SMTP relay username | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_smtp import GoogleCloudIdentitytoolkitAdminV2Smtp

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2Smtp from a JSON string
google_cloud_identitytoolkit_admin_v2_smtp_instance = GoogleCloudIdentitytoolkitAdminV2Smtp.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2Smtp.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_smtp_dict = google_cloud_identitytoolkit_admin_v2_smtp_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2Smtp from a dict
google_cloud_identitytoolkit_admin_v2_smtp_from_dict = GoogleCloudIdentitytoolkitAdminV2Smtp.from_dict(google_cloud_identitytoolkit_admin_v2_smtp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


