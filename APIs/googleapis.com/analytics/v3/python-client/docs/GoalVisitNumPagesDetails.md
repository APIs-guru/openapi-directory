# GoalVisitNumPagesDetails

Details for the goal of the type VISIT_NUM_PAGES.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparison_type** | **str** | Type of comparison. Possible values are LESS_THAN, GREATER_THAN, or EQUAL. | [optional] 
**comparison_value** | **str** | Value used for this comparison. | [optional] 

## Example

```python
from openapi_client.models.goal_visit_num_pages_details import GoalVisitNumPagesDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoalVisitNumPagesDetails from a JSON string
goal_visit_num_pages_details_instance = GoalVisitNumPagesDetails.from_json(json)
# print the JSON string representation of the object
print(GoalVisitNumPagesDetails.to_json())

# convert the object into a dict
goal_visit_num_pages_details_dict = goal_visit_num_pages_details_instance.to_dict()
# create an instance of GoalVisitNumPagesDetails from a dict
goal_visit_num_pages_details_from_dict = GoalVisitNumPagesDetails.from_dict(goal_visit_num_pages_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


