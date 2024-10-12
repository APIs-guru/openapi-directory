# GoogleCloudIdentitytoolkitAdminV2EmailTemplate

Email template. The subject and body fields can contain the following placeholders which will be replaced with the appropriate values: %LINK% - The link to use to redeem the send OOB code. %EMAIL% - The email where the email is being sent. %NEW_EMAIL% - The new email being set for the account (when applicable). %APP_NAME% - The GCP project's display name. %DISPLAY_NAME% - The user's display name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Email body | [optional] 
**body_format** | **str** | Email body format | [optional] 
**customized** | **bool** | Output only. Whether the body or subject of the email is customized. | [optional] [readonly] 
**reply_to** | **str** | Reply-to address | [optional] 
**sender_display_name** | **str** | Sender display name | [optional] 
**sender_local_part** | **str** | Local part of From address | [optional] 
**subject** | **str** | Subject of the email | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_email_template import GoogleCloudIdentitytoolkitAdminV2EmailTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2EmailTemplate from a JSON string
google_cloud_identitytoolkit_admin_v2_email_template_instance = GoogleCloudIdentitytoolkitAdminV2EmailTemplate.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2EmailTemplate.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_email_template_dict = google_cloud_identitytoolkit_admin_v2_email_template_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2EmailTemplate from a dict
google_cloud_identitytoolkit_admin_v2_email_template_from_dict = GoogleCloudIdentitytoolkitAdminV2EmailTemplate.from_dict(google_cloud_identitytoolkit_admin_v2_email_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


