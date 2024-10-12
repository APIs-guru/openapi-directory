# BusinessCurrentAccountBenefitsBenefitGroupInnerBenefitItemBenefitDetailInner

Benefit detail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benefit_description** | **str** | A textual explanation of what the benefit is | [optional] 
**benefit_id** | **str** | Unique benefit identifier per organisation | [optional] 
**benefit_name** | **str** | The name of the benefit | [optional] 
**benefit_type** | **str** | Type that represents the nature of the benefit | [optional] 
**benefit_value** | **str** | The value or values permissible for a specific benefit for an individual product representing a product characteristic | [optional] 
**counter** | **int** | Counter for the criteria (e.g. number of DD) | [optional] 
**criteria_type** | **List[str]** |  | [optional] 
**default_to_accounts** | **bool** | Is the benefit part of the default account | [optional] 
**maximum_criteria** | **str** | Maximum amount for the criteria | [optional] 
**minimum_criteria** | **str** | Minimum amount for the criteria | [optional] 
**promotion_end_date** | **str** | If the benefit is temporal the end date is when the benefit is no longer applicable | [optional] 
**promotion_start_date** | **str** | If the benefit is temporal the start date is when the benefit comes into effect | [optional] 

## Example

```python
from openapi_client.models.business_current_account_benefits_benefit_group_inner_benefit_item_benefit_detail_inner import BusinessCurrentAccountBenefitsBenefitGroupInnerBenefitItemBenefitDetailInner

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountBenefitsBenefitGroupInnerBenefitItemBenefitDetailInner from a JSON string
business_current_account_benefits_benefit_group_inner_benefit_item_benefit_detail_inner_instance = BusinessCurrentAccountBenefitsBenefitGroupInnerBenefitItemBenefitDetailInner.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountBenefitsBenefitGroupInnerBenefitItemBenefitDetailInner.to_json())

# convert the object into a dict
business_current_account_benefits_benefit_group_inner_benefit_item_benefit_detail_inner_dict = business_current_account_benefits_benefit_group_inner_benefit_item_benefit_detail_inner_instance.to_dict()
# create an instance of BusinessCurrentAccountBenefitsBenefitGroupInnerBenefitItemBenefitDetailInner from a dict
business_current_account_benefits_benefit_group_inner_benefit_item_benefit_detail_inner_from_dict = BusinessCurrentAccountBenefitsBenefitGroupInnerBenefitItemBenefitDetailInner.from_dict(business_current_account_benefits_benefit_group_inner_benefit_item_benefit_detail_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


