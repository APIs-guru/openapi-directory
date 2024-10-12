# SslCertsCreateEphemeralRequest

SslCerts create ephemeral certificate request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | Access token to include in the signed certificate. | [optional] 
**public_key** | **str** | PEM encoded public key to include in the signed certificate. | [optional] 

## Example

```python
from openapi_client.models.ssl_certs_create_ephemeral_request import SslCertsCreateEphemeralRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SslCertsCreateEphemeralRequest from a JSON string
ssl_certs_create_ephemeral_request_instance = SslCertsCreateEphemeralRequest.from_json(json)
# print the JSON string representation of the object
print(SslCertsCreateEphemeralRequest.to_json())

# convert the object into a dict
ssl_certs_create_ephemeral_request_dict = ssl_certs_create_ephemeral_request_instance.to_dict()
# create an instance of SslCertsCreateEphemeralRequest from a dict
ssl_certs_create_ephemeral_request_from_dict = SslCertsCreateEphemeralRequest.from_dict(ssl_certs_create_ephemeral_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


