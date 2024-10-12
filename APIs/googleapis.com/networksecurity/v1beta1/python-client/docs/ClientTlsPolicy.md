# ClientTlsPolicy

ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_certificate** | [**GoogleCloudNetworksecurityV1beta1CertificateProvider**](GoogleCloudNetworksecurityV1beta1CertificateProvider.md) |  | [optional] 
**create_time** | **str** | Output only. The timestamp when the resource was created. | [optional] [readonly] 
**description** | **str** | Optional. Free-text description of the resource. | [optional] 
**labels** | **Dict[str, str]** | Optional. Set of label tags associated with the resource. | [optional] 
**name** | **str** | Required. Name of the ClientTlsPolicy resource. It matches the pattern &#x60;projects/*/locations/{location}/clientTlsPolicies/{client_tls_policy}&#x60; | [optional] 
**server_validation_ca** | [**List[ValidationCA]**](ValidationCA.md) | Optional. Defines the mechanism to obtain the Certificate Authority certificate to validate the server certificate. If empty, client does not validate the server certificate. | [optional] 
**sni** | **str** | Optional. Server Name Indication string to present to the server during TLS handshake. E.g: \&quot;secure.example.com\&quot;. | [optional] 
**update_time** | **str** | Output only. The timestamp when the resource was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.client_tls_policy import ClientTlsPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ClientTlsPolicy from a JSON string
client_tls_policy_instance = ClientTlsPolicy.from_json(json)
# print the JSON string representation of the object
print(ClientTlsPolicy.to_json())

# convert the object into a dict
client_tls_policy_dict = client_tls_policy_instance.to_dict()
# create an instance of ClientTlsPolicy from a dict
client_tls_policy_from_dict = ClientTlsPolicy.from_dict(client_tls_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


