# HostnameConfiguration

Custom hostname configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | [**CertificateInformation**](CertificateInformation.md) |  | [optional] 
**certificate_password** | **str** | Certificate Password. | [optional] 
**default_ssl_binding** | **bool** | Specify true to setup the certificate associated with this Hostname as the Default SSL Certificate. If a client does not send the SNI header, then this will be the certificate that will be challenged. The property is useful if a service has multiple custom hostname enabled and it needs to decide on the default ssl certificate. The setting only applied to Proxy Hostname Type. | [optional] [default to False]
**encoded_certificate** | **str** | Base64 Encoded certificate. | [optional] 
**host_name** | **str** | Hostname to configure on the Api Management service. | 
**key_vault_id** | **str** | Url to the KeyVault Secret containing the Ssl Certificate. If absolute Url containing version is provided, auto-update of ssl certificate will not work. This requires Api Management service to be configured with MSI. The secret should be of type *application/x-pkcs12* | [optional] 
**negotiate_client_certificate** | **bool** | Specify true to always negotiate client certificate on the hostname. Default Value is false. | [optional] [default to False]
**type** | **str** | Hostname type. | 

## Example

```python
from openapi_client.models.hostname_configuration import HostnameConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of HostnameConfiguration from a JSON string
hostname_configuration_instance = HostnameConfiguration.from_json(json)
# print the JSON string representation of the object
print(HostnameConfiguration.to_json())

# convert the object into a dict
hostname_configuration_dict = hostname_configuration_instance.to_dict()
# create an instance of HostnameConfiguration from a dict
hostname_configuration_from_dict = HostnameConfiguration.from_dict(hostname_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


