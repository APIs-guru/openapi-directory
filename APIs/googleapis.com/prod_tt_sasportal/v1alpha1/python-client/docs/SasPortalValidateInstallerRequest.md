# SasPortalValidateInstallerRequest

Request for ValidateInstaller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoded_secret** | **str** | Required. JSON Web Token signed using a CPI private key. Payload must include a \&quot;secret\&quot; claim whose value is the secret. | [optional] 
**installer_id** | **str** | Required. Unique installer id (CPI ID) from the Certified Professional Installers database. | [optional] 
**secret** | **str** | Required. Secret returned by the GenerateSecret. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_validate_installer_request import SasPortalValidateInstallerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalValidateInstallerRequest from a JSON string
sas_portal_validate_installer_request_instance = SasPortalValidateInstallerRequest.from_json(json)
# print the JSON string representation of the object
print(SasPortalValidateInstallerRequest.to_json())

# convert the object into a dict
sas_portal_validate_installer_request_dict = sas_portal_validate_installer_request_instance.to_dict()
# create an instance of SasPortalValidateInstallerRequest from a dict
sas_portal_validate_installer_request_from_dict = SasPortalValidateInstallerRequest.from_dict(sas_portal_validate_installer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


