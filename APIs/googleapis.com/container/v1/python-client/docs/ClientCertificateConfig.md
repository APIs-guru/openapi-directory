# ClientCertificateConfig

Configuration for client certificates on the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_client_certificate** | **bool** | Issue a client certificate. | [optional] 

## Example

```python
from openapi_client.models.client_certificate_config import ClientCertificateConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ClientCertificateConfig from a JSON string
client_certificate_config_instance = ClientCertificateConfig.from_json(json)
# print the JSON string representation of the object
print(ClientCertificateConfig.to_json())

# convert the object into a dict
client_certificate_config_dict = client_certificate_config_instance.to_dict()
# create an instance of ClientCertificateConfig from a dict
client_certificate_config_from_dict = ClientCertificateConfig.from_dict(client_certificate_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


