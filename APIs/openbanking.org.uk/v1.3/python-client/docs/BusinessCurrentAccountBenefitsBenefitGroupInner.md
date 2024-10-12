# BusinessCurrentAccountBenefitsBenefitGroupInner

Benefit Interest Group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benefit_item** | [**BusinessCurrentAccountBenefitsBenefitGroupInnerBenefitItem**](BusinessCurrentAccountBenefitsBenefitGroupInnerBenefitItem.md) |  | 
**benefit_sub_type** | **str** | Benefit Subtype Code | [optional] 

## Example

```python
from openapi_client.models.business_current_account_benefits_benefit_group_inner import BusinessCurrentAccountBenefitsBenefitGroupInner

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountBenefitsBenefitGroupInner from a JSON string
business_current_account_benefits_benefit_group_inner_instance = BusinessCurrentAccountBenefitsBenefitGroupInner.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountBenefitsBenefitGroupInner.to_json())

# convert the object into a dict
business_current_account_benefits_benefit_group_inner_dict = business_current_account_benefits_benefit_group_inner_instance.to_dict()
# create an instance of BusinessCurrentAccountBenefitsBenefitGroupInner from a dict
business_current_account_benefits_benefit_group_inner_from_dict = BusinessCurrentAccountBenefitsBenefitGroupInner.from_dict(business_current_account_benefits_benefit_group_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


