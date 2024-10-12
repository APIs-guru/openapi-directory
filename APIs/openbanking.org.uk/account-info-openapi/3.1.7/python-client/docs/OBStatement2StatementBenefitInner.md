# OBStatement2StatementBenefitInner

Set of elements used to provide details of a benefit or reward amount for the statement resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**OBActiveOrHistoricCurrencyAndAmount5**](OBActiveOrHistoricCurrencyAndAmount5.md) |  | 
**type** | **str** | Benefit type, in a coded form. | 

## Example

```python
from openapi_client.models.ob_statement2_statement_benefit_inner import OBStatement2StatementBenefitInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBStatement2StatementBenefitInner from a JSON string
ob_statement2_statement_benefit_inner_instance = OBStatement2StatementBenefitInner.from_json(json)
# print the JSON string representation of the object
print(OBStatement2StatementBenefitInner.to_json())

# convert the object into a dict
ob_statement2_statement_benefit_inner_dict = ob_statement2_statement_benefit_inner_instance.to_dict()
# create an instance of OBStatement2StatementBenefitInner from a dict
ob_statement2_statement_benefit_inner_from_dict = OBStatement2StatementBenefitInner.from_dict(ob_statement2_statement_benefit_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


