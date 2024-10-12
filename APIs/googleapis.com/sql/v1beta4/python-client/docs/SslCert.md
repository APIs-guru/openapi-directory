# SslCert

SslCerts Resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert** | **str** | PEM representation. | [optional] 
**cert_serial_number** | **str** | Serial number, as extracted from the certificate. | [optional] 
**common_name** | **str** | User supplied name. Constrained to [a-zA-Z.-_ ]+. | [optional] 
**create_time** | **str** | The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example &#x60;2012-11-15T16:19:00.094Z&#x60;. | [optional] 
**expiration_time** | **str** | The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example &#x60;2012-11-15T16:19:00.094Z&#x60;. | [optional] 
**instance** | **str** | Name of the database instance. | [optional] 
**kind** | **str** | This is always &#x60;sql#sslCert&#x60;. | [optional] 
**self_link** | **str** | The URI of this resource. | [optional] 
**sha1_fingerprint** | **str** | Sha1 Fingerprint. | [optional] 

## Example

```python
from openapi_client.models.ssl_cert import SslCert

# TODO update the JSON string below
json = "{}"
# create an instance of SslCert from a JSON string
ssl_cert_instance = SslCert.from_json(json)
# print the JSON string representation of the object
print(SslCert.to_json())

# convert the object into a dict
ssl_cert_dict = ssl_cert_instance.to_dict()
# create an instance of SslCert from a dict
ssl_cert_from_dict = SslCert.from_dict(ssl_cert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


