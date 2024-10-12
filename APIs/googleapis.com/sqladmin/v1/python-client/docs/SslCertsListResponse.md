# SslCertsListResponse

SslCerts list response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[SslCert]**](SslCert.md) | List of client certificates for the instance. | [optional] 
**kind** | **str** | This is always &#x60;sql#sslCertsList&#x60;. | [optional] 

## Example

```python
from openapi_client.models.ssl_certs_list_response import SslCertsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SslCertsListResponse from a JSON string
ssl_certs_list_response_instance = SslCertsListResponse.from_json(json)
# print the JSON string representation of the object
print(SslCertsListResponse.to_json())

# convert the object into a dict
ssl_certs_list_response_dict = ssl_certs_list_response_instance.to_dict()
# create an instance of SslCertsListResponse from a dict
ssl_certs_list_response_from_dict = SslCertsListResponse.from_dict(ssl_certs_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


