# MysqlSslConfig

MySQL SSL configuration information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_certificate** | **str** | Input only. PEM-encoded certificate of the CA that signed the source database server&#39;s certificate. | [optional] 
**ca_certificate_set** | **bool** | Output only. Indicates whether the ca_certificate field is set. | [optional] [readonly] 
**client_certificate** | **str** | Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source database server. If this field is used then the &#39;client_key&#39; and the &#39;ca_certificate&#39; fields are mandatory. | [optional] 
**client_certificate_set** | **bool** | Output only. Indicates whether the client_certificate field is set. | [optional] [readonly] 
**client_key** | **str** | Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then the &#39;client_certificate&#39; and the &#39;ca_certificate&#39; fields are mandatory. | [optional] 
**client_key_set** | **bool** | Output only. Indicates whether the client_key field is set. | [optional] [readonly] 

## Example

```python
from openapi_client.models.mysql_ssl_config import MysqlSslConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MysqlSslConfig from a JSON string
mysql_ssl_config_instance = MysqlSslConfig.from_json(json)
# print the JSON string representation of the object
print(MysqlSslConfig.to_json())

# convert the object into a dict
mysql_ssl_config_dict = mysql_ssl_config_instance.to_dict()
# create an instance of MysqlSslConfig from a dict
mysql_ssl_config_from_dict = MysqlSslConfig.from_dict(mysql_ssl_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


