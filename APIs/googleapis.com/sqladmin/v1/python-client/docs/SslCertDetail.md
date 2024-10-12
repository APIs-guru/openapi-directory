# SslCertDetail

SslCertDetail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert_info** | [**SslCert**](SslCert.md) |  | [optional] 
**cert_private_key** | **str** | The private key for the client cert, in pem format. Keep private in order to protect your security. | [optional] 

## Example

```python
from openapi_client.models.ssl_cert_detail import SslCertDetail

# TODO update the JSON string below
json = "{}"
# create an instance of SslCertDetail from a JSON string
ssl_cert_detail_instance = SslCertDetail.from_json(json)
# print the JSON string representation of the object
print(SslCertDetail.to_json())

# convert the object into a dict
ssl_cert_detail_dict = ssl_cert_detail_instance.to_dict()
# create an instance of SslCertDetail from a dict
ssl_cert_detail_from_dict = SslCertDetail.from_dict(ssl_cert_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


