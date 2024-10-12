# ValidationCA

Specification of ValidationCA. Defines the mechanism to obtain the Certificate Authority certificate to validate the peer certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_provider_instance** | [**CertificateProviderInstance**](CertificateProviderInstance.md) |  | [optional] 
**grpc_endpoint** | [**GoogleCloudNetworksecurityV1GrpcEndpoint**](GoogleCloudNetworksecurityV1GrpcEndpoint.md) |  | [optional] 

## Example

```python
from openapi_client.models.validation_ca import ValidationCA

# TODO update the JSON string below
json = "{}"
# create an instance of ValidationCA from a JSON string
validation_ca_instance = ValidationCA.from_json(json)
# print the JSON string representation of the object
print(ValidationCA.to_json())

# convert the object into a dict
validation_ca_dict = validation_ca_instance.to_dict()
# create an instance of ValidationCA from a dict
validation_ca_from_dict = ValidationCA.from_dict(validation_ca_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


