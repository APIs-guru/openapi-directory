# BusinessCurrentAccountBenefits

Benefit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benefit** | **bool** | Describe  one or more benefits if they exist | 
**benefit_group** | [**List[BusinessCurrentAccountBenefitsBenefitGroupInner]**](BusinessCurrentAccountBenefitsBenefitGroupInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.business_current_account_benefits import BusinessCurrentAccountBenefits

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountBenefits from a JSON string
business_current_account_benefits_instance = BusinessCurrentAccountBenefits.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountBenefits.to_json())

# convert the object into a dict
business_current_account_benefits_dict = business_current_account_benefits_instance.to_dict()
# create an instance of BusinessCurrentAccountBenefits from a dict
business_current_account_benefits_from_dict = BusinessCurrentAccountBenefits.from_dict(business_current_account_benefits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


