# GenerateEphemeralCertResponse

Ephemeral certificate creation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ephemeral_cert** | [**SslCert**](SslCert.md) |  | [optional] 

## Example

```python
from openapi_client.models.generate_ephemeral_cert_response import GenerateEphemeralCertResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateEphemeralCertResponse from a JSON string
generate_ephemeral_cert_response_instance = GenerateEphemeralCertResponse.from_json(json)
# print the JSON string representation of the object
print(GenerateEphemeralCertResponse.to_json())

# convert the object into a dict
generate_ephemeral_cert_response_dict = generate_ephemeral_cert_response_instance.to_dict()
# create an instance of GenerateEphemeralCertResponse from a dict
generate_ephemeral_cert_response_from_dict = GenerateEphemeralCertResponse.from_dict(generate_ephemeral_cert_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


