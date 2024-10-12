# GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints

Hints to the crawler for identifying input fields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password_resource_name** | **str** | Required. The Android resource name of the password UI element. For example, in Java: R.string.foo in xml: @string/foo Only the \&quot;foo\&quot; part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html | [optional] 
**username_resource_name** | **str** | Required. The Android resource name of the username UI element. For example, in Java: R.string.foo in xml: @string/foo Only the \&quot;foo\&quot; part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1alpha_login_credential_field_hints import GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints from a JSON string
google_firebase_appdistro_v1alpha_login_credential_field_hints_instance = GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints.to_json())

# convert the object into a dict
google_firebase_appdistro_v1alpha_login_credential_field_hints_dict = google_firebase_appdistro_v1alpha_login_credential_field_hints_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints from a dict
google_firebase_appdistro_v1alpha_login_credential_field_hints_from_dict = GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints.from_dict(google_firebase_appdistro_v1alpha_login_credential_field_hints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


