# FetchCaCertsResponse

Response message for CertificateAuthorityService.FetchCaCerts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_certs** | [**List[CertChain]**](CertChain.md) | The PEM encoded CA certificate chains of all Certificate Authorities in this CaPool in the ENABLED, DISABLED, or STAGED states. | [optional] 

## Example

```python
from openapi_client.models.fetch_ca_certs_response import FetchCaCertsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchCaCertsResponse from a JSON string
fetch_ca_certs_response_instance = FetchCaCertsResponse.from_json(json)
# print the JSON string representation of the object
print(FetchCaCertsResponse.to_json())

# convert the object into a dict
fetch_ca_certs_response_dict = fetch_ca_certs_response_instance.to_dict()
# create an instance of FetchCaCertsResponse from a dict
fetch_ca_certs_response_from_dict = FetchCaCertsResponse.from_dict(fetch_ca_certs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


