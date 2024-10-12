# BusinessCurrentAccountBenefitsBenefitGroupInnerBenefitItem

Benefit Item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benefit_detail** | [**List[BusinessCurrentAccountBenefitsBenefitGroupInnerBenefitItemBenefitDetailInner]**](BusinessCurrentAccountBenefitsBenefitGroupInnerBenefitItemBenefitDetailInner.md) |  | [optional] 
**date_of_change** | **str** | Date of the change if it refers to future terms | [optional] 
**length_promotional_in_days** | **int** | Describes the length if only a duration is given instead of a date in days | [optional] 
**start_promotion_or_future_terms** | **str** | Describes the start date | [optional] 
**stop_promotion_or_future_terms** | **str** | Describes the end date | [optional] 

## Example

```python
from openapi_client.models.business_current_account_benefits_benefit_group_inner_benefit_item import BusinessCurrentAccountBenefitsBenefitGroupInnerBenefitItem

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountBenefitsBenefitGroupInnerBenefitItem from a JSON string
business_current_account_benefits_benefit_group_inner_benefit_item_instance = BusinessCurrentAccountBenefitsBenefitGroupInnerBenefitItem.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountBenefitsBenefitGroupInnerBenefitItem.to_json())

# convert the object into a dict
business_current_account_benefits_benefit_group_inner_benefit_item_dict = business_current_account_benefits_benefit_group_inner_benefit_item_instance.to_dict()
# create an instance of BusinessCurrentAccountBenefitsBenefitGroupInnerBenefitItem from a dict
business_current_account_benefits_benefit_group_inner_benefit_item_from_dict = BusinessCurrentAccountBenefitsBenefitGroupInnerBenefitItem.from_dict(business_current_account_benefits_benefit_group_inner_benefit_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


