# CertHttpChallenge

Represents an HTTP certificate challenge.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | The URL path on which to serve the specified token to satisfy the certificate challenge. | [optional] 
**token** | **str** | The token to serve at the specified URL path to satisfy the certificate challenge. | [optional] 

## Example

```python
from openapi_client.models.cert_http_challenge import CertHttpChallenge

# TODO update the JSON string below
json = "{}"
# create an instance of CertHttpChallenge from a JSON string
cert_http_challenge_instance = CertHttpChallenge.from_json(json)
# print the JSON string representation of the object
print(CertHttpChallenge.to_json())

# convert the object into a dict
cert_http_challenge_dict = cert_http_challenge_instance.to_dict()
# create an instance of CertHttpChallenge from a dict
cert_http_challenge_from_dict = CertHttpChallenge.from_dict(cert_http_challenge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


