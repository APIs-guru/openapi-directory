# HouseholdIncomeTargetingOptionDetails

Represents a targetable household income. This will be populated in the household_income_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**household_income** | **str** | Output only. The household income of an audience. | [optional] [readonly] 

## Example

```python
from openapi_client.models.household_income_targeting_option_details import HouseholdIncomeTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of HouseholdIncomeTargetingOptionDetails from a JSON string
household_income_targeting_option_details_instance = HouseholdIncomeTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(HouseholdIncomeTargetingOptionDetails.to_json())

# convert the object into a dict
household_income_targeting_option_details_dict = household_income_targeting_option_details_instance.to_dict()
# create an instance of HouseholdIncomeTargetingOptionDetails from a dict
household_income_targeting_option_details_from_dict = HouseholdIncomeTargetingOptionDetails.from_dict(household_income_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


