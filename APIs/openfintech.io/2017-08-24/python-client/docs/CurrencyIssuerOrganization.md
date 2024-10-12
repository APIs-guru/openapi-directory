# CurrencyIssuerOrganization

Issuer. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CurrencyIssuerOrganizationData**](CurrencyIssuerOrganizationData.md) |  | [optional] 
**links** | [**CurrencyIssuerOrganizationLinks**](CurrencyIssuerOrganizationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.currency_issuer_organization import CurrencyIssuerOrganization

# TODO update the JSON string below
json = "{}"
# create an instance of CurrencyIssuerOrganization from a JSON string
currency_issuer_organization_instance = CurrencyIssuerOrganization.from_json(json)
# print the JSON string representation of the object
print(CurrencyIssuerOrganization.to_json())

# convert the object into a dict
currency_issuer_organization_dict = currency_issuer_organization_instance.to_dict()
# create an instance of CurrencyIssuerOrganization from a dict
currency_issuer_organization_from_dict = CurrencyIssuerOrganization.from_dict(currency_issuer_organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


