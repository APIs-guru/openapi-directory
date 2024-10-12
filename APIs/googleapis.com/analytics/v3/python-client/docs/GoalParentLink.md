# GoalParentLink

Parent link for a goal. Points to the view (profile) to which this goal belongs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | Link to the view (profile) to which this goal belongs. | [optional] 
**type** | **str** | Value is \&quot;analytics#profile\&quot;. | [optional] [default to 'analytics#profile']

## Example

```python
from openapi_client.models.goal_parent_link import GoalParentLink

# TODO update the JSON string below
json = "{}"
# create an instance of GoalParentLink from a JSON string
goal_parent_link_instance = GoalParentLink.from_json(json)
# print the JSON string representation of the object
print(GoalParentLink.to_json())

# convert the object into a dict
goal_parent_link_dict = goal_parent_link_instance.to_dict()
# create an instance of GoalParentLink from a dict
goal_parent_link_from_dict = GoalParentLink.from_dict(goal_parent_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


