# UploadCertificateRequest

Upload Certificate Request to IDM

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract_version** | **str** | Gets ContractVersion | [optional] [readonly] 
**properties** | [**RawCertificateData**](RawCertificateData.md) |  | 

## Example

```python
from openapi_client.models.upload_certificate_request import UploadCertificateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UploadCertificateRequest from a JSON string
upload_certificate_request_instance = UploadCertificateRequest.from_json(json)
# print the JSON string representation of the object
print(UploadCertificateRequest.to_json())

# convert the object into a dict
upload_certificate_request_dict = upload_certificate_request_instance.to_dict()
# create an instance of UploadCertificateRequest from a dict
upload_certificate_request_from_dict = UploadCertificateRequest.from_dict(upload_certificate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


