# SslConfig

SSL Configuration of a connection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_variables** | [**List[ConfigVariable]**](ConfigVariable.md) | Additional SSL related field values | [optional] 
**client_cert_type** | **str** | Type of Client Cert (PEM/JKS/.. etc.) | [optional] 
**client_certificate** | [**Secret**](Secret.md) |  | [optional] 
**client_private_key** | [**Secret**](Secret.md) |  | [optional] 
**client_private_key_pass** | [**Secret**](Secret.md) |  | [optional] 
**private_server_certificate** | [**Secret**](Secret.md) |  | [optional] 
**server_cert_type** | **str** | Type of Server Cert (PEM/JKS/.. etc.) | [optional] 
**trust_model** | **str** | Trust Model of the SSL connection | [optional] 
**type** | **str** | Controls the ssl type for the given connector version. | [optional] 
**use_ssl** | **bool** | Bool for enabling SSL | [optional] 

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


