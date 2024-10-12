# UploadCertificateResponse

The upload registration certificate response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_audience** | **str** | Identifier of the target resource that is the recipient of the requested token. | [optional] [readonly] 
**aad_authority** | **str** | Azure Active Directory tenant authority. | [optional] [readonly] 
**aad_tenant_id** | **str** | Azure Active Directory tenant ID. | [optional] [readonly] 
**auth_type** | **str** | Specifies authentication type. | [optional] 
**azure_management_endpoint_audience** | **str** | The azure management endpoint audience. | [optional] [readonly] 
**resource_id** | **str** | The resource ID of the Data Box Edge/Gateway device. | [optional] [readonly] 
**service_principal_client_id** | **str** | Azure Active Directory service principal client ID. | [optional] [readonly] 
**service_principal_object_id** | **str** | Azure Active Directory service principal object ID. | [optional] [readonly] 

## Example

```python
from openapi_client.models.upload_certificate_response import UploadCertificateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UploadCertificateResponse from a JSON string
upload_certificate_response_instance = UploadCertificateResponse.from_json(json)
# print the JSON string representation of the object
print(UploadCertificateResponse.to_json())

# convert the object into a dict
upload_certificate_response_dict = upload_certificate_response_instance.to_dict()
# create an instance of UploadCertificateResponse from a dict
upload_certificate_response_from_dict = UploadCertificateResponse.from_dict(upload_certificate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


