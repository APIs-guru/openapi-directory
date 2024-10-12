# GoogleCloudNetworksecurityV1beta1CertificateProvider

Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_provider_instance** | [**CertificateProviderInstance**](CertificateProviderInstance.md) |  | [optional] 
**grpc_endpoint** | [**GoogleCloudNetworksecurityV1beta1GrpcEndpoint**](GoogleCloudNetworksecurityV1beta1GrpcEndpoint.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_networksecurity_v1beta1_certificate_provider import GoogleCloudNetworksecurityV1beta1CertificateProvider

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudNetworksecurityV1beta1CertificateProvider from a JSON string
google_cloud_networksecurity_v1beta1_certificate_provider_instance = GoogleCloudNetworksecurityV1beta1CertificateProvider.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudNetworksecurityV1beta1CertificateProvider.to_json())

# convert the object into a dict
google_cloud_networksecurity_v1beta1_certificate_provider_dict = google_cloud_networksecurity_v1beta1_certificate_provider_instance.to_dict()
# create an instance of GoogleCloudNetworksecurityV1beta1CertificateProvider from a dict
google_cloud_networksecurity_v1beta1_certificate_provider_from_dict = GoogleCloudNetworksecurityV1beta1CertificateProvider.from_dict(google_cloud_networksecurity_v1beta1_certificate_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


