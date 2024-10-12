# GoogleCloudIdentitytoolkitAdminV2IdpCertificate

The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x509_certificate** | **str** | The x509 certificate | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_idp_certificate import GoogleCloudIdentitytoolkitAdminV2IdpCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2IdpCertificate from a JSON string
google_cloud_identitytoolkit_admin_v2_idp_certificate_instance = GoogleCloudIdentitytoolkitAdminV2IdpCertificate.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2IdpCertificate.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_idp_certificate_dict = google_cloud_identitytoolkit_admin_v2_idp_certificate_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2IdpCertificate from a dict
google_cloud_identitytoolkit_admin_v2_idp_certificate_from_dict = GoogleCloudIdentitytoolkitAdminV2IdpCertificate.from_dict(google_cloud_identitytoolkit_admin_v2_idp_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


