# IssuanceModes

IssuanceModes specifies the allowed ways in which Certificates may be requested from this CaPool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_config_based_issuance** | **bool** | Optional. When true, allows callers to create Certificates by specifying a CertificateConfig. | [optional] 
**allow_csr_based_issuance** | **bool** | Optional. When true, allows callers to create Certificates by specifying a CSR. | [optional] 

## Example

```python
from openapi_client.models.issuance_modes import IssuanceModes

# TODO update the JSON string below
json = "{}"
# create an instance of IssuanceModes from a JSON string
issuance_modes_instance = IssuanceModes.from_json(json)
# print the JSON string representation of the object
print(IssuanceModes.to_json())

# convert the object into a dict
issuance_modes_dict = issuance_modes_instance.to_dict()
# create an instance of IssuanceModes from a dict
issuance_modes_from_dict = IssuanceModes.from_dict(issuance_modes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


