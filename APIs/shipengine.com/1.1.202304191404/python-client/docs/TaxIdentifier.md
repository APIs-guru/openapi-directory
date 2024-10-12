# TaxIdentifier

A tax identifier object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifier_type** | [**IdentifierType**](IdentifierType.md) |  | 
**issuing_authority** | **str** | The authority that issued this tax. This must be a valid 2 character ISO 3166 Alpha 2 country code. | 
**taxable_entity_type** | [**TaxableEntityType**](TaxableEntityType.md) |  | 
**value** | **str** | The value of the identifier | 

## Example

```python
from openapi_client.models.tax_identifier import TaxIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of TaxIdentifier from a JSON string
tax_identifier_instance = TaxIdentifier.from_json(json)
# print the JSON string representation of the object
print(TaxIdentifier.to_json())

# convert the object into a dict
tax_identifier_dict = tax_identifier_instance.to_dict()
# create an instance of TaxIdentifier from a dict
tax_identifier_from_dict = TaxIdentifier.from_dict(tax_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


