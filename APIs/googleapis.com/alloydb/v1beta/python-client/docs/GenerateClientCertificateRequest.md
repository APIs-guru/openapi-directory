# GenerateClientCertificateRequest

Message for requests to generate a client certificate signed by the Cluster CA.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert_duration** | **str** | Optional. An optional hint to the endpoint to generate the client certificate with the requested duration. The duration can be from 1 hour to 24 hours. The endpoint may or may not honor the hint. If the hint is left unspecified or is not honored, then the endpoint will pick an appropriate default duration. | [optional] 
**pem_csr** | **str** | Optional. A pem-encoded X.509 certificate signing request (CSR). It is recommended to use public_key instead. | [optional] 
**public_key** | **str** | Optional. The public key from the client. | [optional] 
**request_id** | **str** | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). | [optional] 
**use_metadata_exchange** | **bool** | Optional. An optional hint to the endpoint to generate a client ceritificate that can be used by AlloyDB connectors to exchange additional metadata with the server after TLS handshake. | [optional] 

## Example

```python
from openapi_client.models.generate_client_certificate_request import GenerateClientCertificateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateClientCertificateRequest from a JSON string
generate_client_certificate_request_instance = GenerateClientCertificateRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateClientCertificateRequest.to_json())

# convert the object into a dict
generate_client_certificate_request_dict = generate_client_certificate_request_instance.to_dict()
# create an instance of GenerateClientCertificateRequest from a dict
generate_client_certificate_request_from_dict = GenerateClientCertificateRequest.from_dict(generate_client_certificate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


