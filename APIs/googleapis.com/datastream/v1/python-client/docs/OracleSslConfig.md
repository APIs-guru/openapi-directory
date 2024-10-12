# OracleSslConfig

Oracle SSL configuration information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_certificate** | **str** | Input only. PEM-encoded certificate of the CA that signed the source database server&#39;s certificate. | [optional] 
**ca_certificate_set** | **bool** | Output only. Indicates whether the ca_certificate field has been set for this Connection-Profile. | [optional] [readonly] 

## Example

```python
from openapi_client.models.oracle_ssl_config import OracleSslConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OracleSslConfig from a JSON string
oracle_ssl_config_instance = OracleSslConfig.from_json(json)
# print the JSON string representation of the object
print(OracleSslConfig.to_json())

# convert the object into a dict
oracle_ssl_config_dict = oracle_ssl_config_instance.to_dict()
# create an instance of OracleSslConfig from a dict
oracle_ssl_config_from_dict = OracleSslConfig.from_dict(oracle_ssl_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


