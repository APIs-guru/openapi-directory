# IncludeConditions

JSON template for an Analytics Remarketing Include Conditions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days_to_look_back** | **int** | The look-back window lets you specify a time frame for evaluating the behavior that qualifies users for your audience. For example, if your filters include users from Central Asia, and Transactions Greater than 2, and you set the look-back window to 14 days, then any user from Central Asia whose cumulative transactions exceed 2 during the last 14 days is added to the audience. | [optional] 
**is_smart_list** | **bool** | Boolean indicating whether this segment is a smart list. https://support.google.com/analytics/answer/4628577 | [optional] 
**kind** | **str** | Resource type for include conditions. | [optional] [default to 'analytics#includeConditions']
**membership_duration_days** | **int** | Number of days (in the range 1 to 540) a user remains in the audience. | [optional] 
**segment** | **str** | The segment condition that will cause a user to be added to an audience. | [optional] 

## Example

```python
from openapi_client.models.include_conditions import IncludeConditions

# TODO update the JSON string below
json = "{}"
# create an instance of IncludeConditions from a JSON string
include_conditions_instance = IncludeConditions.from_json(json)
# print the JSON string representation of the object
print(IncludeConditions.to_json())

# convert the object into a dict
include_conditions_dict = include_conditions_instance.to_dict()
# create an instance of IncludeConditions from a dict
include_conditions_from_dict = IncludeConditions.from_dict(include_conditions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


