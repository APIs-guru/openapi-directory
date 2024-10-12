# SslCertsInsertResponse

SslCert insert response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_cert** | [**SslCertDetail**](SslCertDetail.md) |  | [optional] 
**kind** | **str** | This is always &#x60;sql#sslCertsInsert&#x60;. | [optional] 
**operation** | [**Operation**](Operation.md) |  | [optional] 
**server_ca_cert** | [**SslCert**](SslCert.md) |  | [optional] 

## Example

```python
from openapi_client.models.ssl_certs_insert_response import SslCertsInsertResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SslCertsInsertResponse from a JSON string
ssl_certs_insert_response_instance = SslCertsInsertResponse.from_json(json)
# print the JSON string representation of the object
print(SslCertsInsertResponse.to_json())

# convert the object into a dict
ssl_certs_insert_response_dict = ssl_certs_insert_response_instance.to_dict()
# create an instance of SslCertsInsertResponse from a dict
ssl_certs_insert_response_from_dict = SslCertsInsertResponse.from_dict(ssl_certs_insert_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


