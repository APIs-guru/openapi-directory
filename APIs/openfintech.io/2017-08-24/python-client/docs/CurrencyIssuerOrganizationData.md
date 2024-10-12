# CurrencyIssuerOrganizationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Issuer organization ID | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.currency_issuer_organization_data import CurrencyIssuerOrganizationData

# TODO update the JSON string below
json = "{}"
# create an instance of CurrencyIssuerOrganizationData from a JSON string
currency_issuer_organization_data_instance = CurrencyIssuerOrganizationData.from_json(json)
# print the JSON string representation of the object
print(CurrencyIssuerOrganizationData.to_json())

# convert the object into a dict
currency_issuer_organization_data_dict = currency_issuer_organization_data_instance.to_dict()
# create an instance of CurrencyIssuerOrganizationData from a dict
currency_issuer_organization_data_from_dict = CurrencyIssuerOrganizationData.from_dict(currency_issuer_organization_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


