# GoalVisitTimeOnSiteDetails

Details for the goal of the type VISIT_TIME_ON_SITE.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparison_type** | **str** | Type of comparison. Possible values are LESS_THAN or GREATER_THAN. | [optional] 
**comparison_value** | **str** | Value used for this comparison. | [optional] 

## Example

```python
from openapi_client.models.goal_visit_time_on_site_details import GoalVisitTimeOnSiteDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoalVisitTimeOnSiteDetails from a JSON string
goal_visit_time_on_site_details_instance = GoalVisitTimeOnSiteDetails.from_json(json)
# print the JSON string representation of the object
print(GoalVisitTimeOnSiteDetails.to_json())

# convert the object into a dict
goal_visit_time_on_site_details_dict = goal_visit_time_on_site_details_instance.to_dict()
# create an instance of GoalVisitTimeOnSiteDetails from a dict
goal_visit_time_on_site_details_from_dict = GoalVisitTimeOnSiteDetails.from_dict(goal_visit_time_on_site_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


