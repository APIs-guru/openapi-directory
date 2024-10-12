# SslConfig

SSL configuration information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_certificate** | **str** | Required. Input only. The x509 PEM-encoded certificate of the CA that signed the source database server&#39;s certificate. The replica will use this certificate to verify it&#39;s connecting to the right host. | [optional] 
**client_certificate** | **str** | Input only. The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.If this field is used then the &#39;client_key&#39; field is mandatory. | [optional] 
**client_key** | **str** | Input only. The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate. If this field is used then the &#39;client_certificate&#39; field is mandatory. | [optional] 
**type** | **str** | Output only. The ssl config type according to &#39;client_key&#39;, &#39;client_certificate&#39; and &#39;ca_certificate&#39;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ssl_config import SslConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SslConfig from a JSON string
ssl_config_instance = SslConfig.from_json(json)
# print the JSON string representation of the object
print(SslConfig.to_json())

# convert the object into a dict
ssl_config_dict = ssl_config_instance.to_dict()
# create an instance of SslConfig from a dict
ssl_config_from_dict = SslConfig.from_dict(ssl_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


