# AppServiceCertificate

Key Vault container for a certificate that is purchased through Azure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_vault_id** | **str** | Key Vault resource Id. | [optional] 
**key_vault_secret_name** | **str** | Key Vault secret name. | [optional] 
**provisioning_state** | **str** | Status of the Key Vault secret. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_certificate import AppServiceCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceCertificate from a JSON string
app_service_certificate_instance = AppServiceCertificate.from_json(json)
# print the JSON string representation of the object
print(AppServiceCertificate.to_json())

# convert the object into a dict
app_service_certificate_dict = app_service_certificate_instance.to_dict()
# create an instance of AppServiceCertificate from a dict
app_service_certificate_from_dict = AppServiceCertificate.from_dict(app_service_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


