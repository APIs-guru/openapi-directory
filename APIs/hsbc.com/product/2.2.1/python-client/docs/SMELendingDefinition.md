# SMELendingDefinition

Open Banking SME Unsecured Loan product data details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | [**List[BrandInner3]**](BrandInner3.md) | Brand registered by the banking group at https://register.fca.org.uk/ | 

## Example

```python
from openapi_client.models.sme_lending_definition import SMELendingDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of SMELendingDefinition from a JSON string
sme_lending_definition_instance = SMELendingDefinition.from_json(json)
# print the JSON string representation of the object
print(SMELendingDefinition.to_json())

# convert the object into a dict
sme_lending_definition_dict = sme_lending_definition_instance.to_dict()
# create an instance of SMELendingDefinition from a dict
sme_lending_definition_from_dict = SMELendingDefinition.from_dict(sme_lending_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


