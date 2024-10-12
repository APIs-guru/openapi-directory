# ApiManagementServiceUploadCertificateParameters

Parameters supplied to the Upload SSL certificate for an API Management service operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **str** | Base64 Encoded certificate. | 
**certificate_password** | **str** | Certificate password. | 
**type** | **str** | Hostname type. | 

## Example

```python
from openapi_client.models.api_management_service_upload_certificate_parameters import ApiManagementServiceUploadCertificateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceUploadCertificateParameters from a JSON string
api_management_service_upload_certificate_parameters_instance = ApiManagementServiceUploadCertificateParameters.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceUploadCertificateParameters.to_json())

# convert the object into a dict
api_management_service_upload_certificate_parameters_dict = api_management_service_upload_certificate_parameters_instance.to_dict()
# create an instance of ApiManagementServiceUploadCertificateParameters from a dict
api_management_service_upload_certificate_parameters_from_dict = ApiManagementServiceUploadCertificateParameters.from_dict(api_management_service_upload_certificate_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


