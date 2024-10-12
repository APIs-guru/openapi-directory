# GoogleCloudConnectorsV1SslConfig

SSL Configuration of a connection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_variables** | [**List[GoogleCloudConnectorsV1ConfigVariable]**](GoogleCloudConnectorsV1ConfigVariable.md) | Additional SSL related field values | [optional] 
**client_cert_type** | **str** | Type of Client Cert (PEM/JKS/.. etc.) | [optional] 
**client_certificate** | [**GoogleCloudConnectorsV1Secret**](GoogleCloudConnectorsV1Secret.md) |  | [optional] 
**client_private_key** | [**GoogleCloudConnectorsV1Secret**](GoogleCloudConnectorsV1Secret.md) |  | [optional] 
**client_private_key_pass** | [**GoogleCloudConnectorsV1Secret**](GoogleCloudConnectorsV1Secret.md) |  | [optional] 
**private_server_certificate** | [**GoogleCloudConnectorsV1Secret**](GoogleCloudConnectorsV1Secret.md) |  | [optional] 
**server_cert_type** | **str** | Type of Server Cert (PEM/JKS/.. etc.) | [optional] 
**trust_model** | **str** | Trust Model of the SSL connection | [optional] 
**type** | **str** | Controls the ssl type for the given connector version. | [optional] 
**use_ssl** | **bool** | Bool for enabling SSL | [optional] 

## Example

```python
from openapi_client.models.google_cloud_connectors_v1_ssl_config import GoogleCloudConnectorsV1SslConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudConnectorsV1SslConfig from a JSON string
google_cloud_connectors_v1_ssl_config_instance = GoogleCloudConnectorsV1SslConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudConnectorsV1SslConfig.to_json())

# convert the object into a dict
google_cloud_connectors_v1_ssl_config_dict = google_cloud_connectors_v1_ssl_config_instance.to_dict()
# create an instance of GoogleCloudConnectorsV1SslConfig from a dict
google_cloud_connectors_v1_ssl_config_from_dict = GoogleCloudConnectorsV1SslConfig.from_dict(google_cloud_connectors_v1_ssl_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


