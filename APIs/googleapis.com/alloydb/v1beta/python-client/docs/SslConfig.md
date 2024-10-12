# SslConfig

SSL configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_source** | **str** | Optional. Certificate Authority (CA) source. Only CA_SOURCE_MANAGED is supported currently, and is the default value. | [optional] 
**ssl_mode** | **str** | Optional. SSL mode. Specifies client-server SSL/TLS connection behavior. | [optional] 

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


