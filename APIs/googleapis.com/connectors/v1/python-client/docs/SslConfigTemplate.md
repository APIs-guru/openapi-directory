# SslConfigTemplate

Ssl config details of a connector version

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_variables** | [**List[ConfigVariableTemplate]**](ConfigVariableTemplate.md) | Any additional fields that need to be rendered | [optional] 
**client_cert_type** | **List[str]** | List of supported Client Cert Types | [optional] 
**is_tls_mandatory** | **bool** | Boolean for determining if the connector version mandates TLS. | [optional] 
**server_cert_type** | **List[str]** | List of supported Server Cert Types | [optional] 
**ssl_type** | **str** | Controls the ssl type for the given connector version | [optional] 

## Example

```python
from openapi_client.models.ssl_config_template import SslConfigTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of SslConfigTemplate from a JSON string
ssl_config_template_instance = SslConfigTemplate.from_json(json)
# print the JSON string representation of the object
print(SslConfigTemplate.to_json())

# convert the object into a dict
ssl_config_template_dict = ssl_config_template_instance.to_dict()
# create an instance of SslConfigTemplate from a dict
ssl_config_template_from_dict = SslConfigTemplate.from_dict(ssl_config_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


