# HouseholdIncomeAssignedTargetingOptionDetails

Details for assigned household income targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**household_income** | **str** | Required. The household income of the audience. | [optional] 

## Example

```python
from openapi_client.models.household_income_assigned_targeting_option_details import HouseholdIncomeAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of HouseholdIncomeAssignedTargetingOptionDetails from a JSON string
household_income_assigned_targeting_option_details_instance = HouseholdIncomeAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(HouseholdIncomeAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
household_income_assigned_targeting_option_details_dict = household_income_assigned_targeting_option_details_instance.to_dict()
# create an instance of HouseholdIncomeAssignedTargetingOptionDetails from a dict
household_income_assigned_targeting_option_details_from_dict = HouseholdIncomeAssignedTargetingOptionDetails.from_dict(household_income_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


