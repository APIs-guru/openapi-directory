# BenefitsDiscountsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **str** | Conditions applied to discount | [optional] 
**name** | **str** | Name of the discount. | [optional] 
**value** | **str** | Value of the discount. This can either be a dollar amount (starting with $) or a percentage (ending with %) | [optional] 

## Example

```python
from openapi_client.models.benefits_discounts_inner import BenefitsDiscountsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BenefitsDiscountsInner from a JSON string
benefits_discounts_inner_instance = BenefitsDiscountsInner.from_json(json)
# print the JSON string representation of the object
print(BenefitsDiscountsInner.to_json())

# convert the object into a dict
benefits_discounts_inner_dict = benefits_discounts_inner_instance.to_dict()
# create an instance of BenefitsDiscountsInner from a dict
benefits_discounts_inner_from_dict = BenefitsDiscountsInner.from_dict(benefits_discounts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


