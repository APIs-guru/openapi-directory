# CurrencyRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countries** | [**CurrencyCountries**](CurrencyCountries.md) |  | [optional] 
**issuer** | [**CurrencyIssuer**](CurrencyIssuer.md) |  | [optional] 
**issuer_organization** | [**CurrencyIssuerOrganization**](CurrencyIssuerOrganization.md) |  | [optional] 
**parent** | [**CurrencyParent**](CurrencyParent.md) |  | [optional] 

## Example

```python
from openapi_client.models.currency_relationships import CurrencyRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CurrencyRelationships from a JSON string
currency_relationships_instance = CurrencyRelationships.from_json(json)
# print the JSON string representation of the object
print(CurrencyRelationships.to_json())

# convert the object into a dict
currency_relationships_dict = currency_relationships_instance.to_dict()
# create an instance of CurrencyRelationships from a dict
currency_relationships_from_dict = CurrencyRelationships.from_dict(currency_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


