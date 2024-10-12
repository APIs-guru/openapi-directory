# GenerateClientCertificateResponse

Message returned by a GenerateClientCertificate operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_cert** | **str** | Optional. The pem-encoded cluster ca X.509 certificate. | [optional] 
**pem_certificate** | **str** | Output only. The pem-encoded, signed X.509 certificate. | [optional] [readonly] 
**pem_certificate_chain** | **List[str]** | Output only. The pem-encoded chain that may be used to verify the X.509 certificate. Expected to be in issuer-to-root order according to RFC 5246. | [optional] [readonly] 

## Example

```python
from openapi_client.models.generate_client_certificate_response import GenerateClientCertificateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateClientCertificateResponse from a JSON string
generate_client_certificate_response_instance = GenerateClientCertificateResponse.from_json(json)
# print the JSON string representation of the object
print(GenerateClientCertificateResponse.to_json())

# convert the object into a dict
generate_client_certificate_response_dict = generate_client_certificate_response_instance.to_dict()
# create an instance of GenerateClientCertificateResponse from a dict
generate_client_certificate_response_from_dict = GenerateClientCertificateResponse.from_dict(generate_client_certificate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


