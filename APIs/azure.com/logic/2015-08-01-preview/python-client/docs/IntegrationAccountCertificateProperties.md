# IntegrationAccountCertificateProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changed_time** | **datetime** | The changed time. | [optional] [readonly] 
**created_time** | **datetime** | The created time. | [optional] [readonly] 
**key** | [**KeyVaultKeyReference**](KeyVaultKeyReference.md) |  | [optional] 
**metadata** | **object** | The metadata. | [optional] 
**public_certificate** | **str** | The public certificate. | [optional] 

## Example

```python
from openapi_client.models.integration_account_certificate_properties import IntegrationAccountCertificateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountCertificateProperties from a JSON string
integration_account_certificate_properties_instance = IntegrationAccountCertificateProperties.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountCertificateProperties.to_json())

# convert the object into a dict
integration_account_certificate_properties_dict = integration_account_certificate_properties_instance.to_dict()
# create an instance of IntegrationAccountCertificateProperties from a dict
integration_account_certificate_properties_from_dict = IntegrationAccountCertificateProperties.from_dict(integration_account_certificate_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


