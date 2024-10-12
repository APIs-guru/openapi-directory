# Goal

JSON template for Analytics goal resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID to which this goal belongs. | [optional] 
**active** | **bool** | Determines whether this goal is active. | [optional] 
**created** | **datetime** | Time this goal was created. | [optional] 
**event_details** | [**GoalEventDetails**](GoalEventDetails.md) |  | [optional] 
**id** | **str** | Goal ID. | [optional] 
**internal_web_property_id** | **str** | Internal ID for the web property to which this goal belongs. | [optional] 
**kind** | **str** | Resource type for an Analytics goal. | [optional] [default to 'analytics#goal']
**name** | **str** | Goal name. | [optional] 
**parent_link** | [**GoalParentLink**](GoalParentLink.md) |  | [optional] 
**profile_id** | **str** | View (Profile) ID to which this goal belongs. | [optional] 
**self_link** | **str** | Link for this goal. | [optional] 
**type** | **str** | Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE, VISIT_NUM_PAGES, AND EVENT. | [optional] 
**updated** | **datetime** | Time this goal was last modified. | [optional] 
**url_destination_details** | [**GoalUrlDestinationDetails**](GoalUrlDestinationDetails.md) |  | [optional] 
**value** | **float** | Goal value. | [optional] 
**visit_num_pages_details** | [**GoalVisitNumPagesDetails**](GoalVisitNumPagesDetails.md) |  | [optional] 
**visit_time_on_site_details** | [**GoalVisitTimeOnSiteDetails**](GoalVisitTimeOnSiteDetails.md) |  | [optional] 
**web_property_id** | **str** | Web property ID to which this goal belongs. The web property ID is of the form UA-XXXXX-YY. | [optional] 

## Example

```python
from openapi_client.models.goal import Goal

# TODO update the JSON string below
json = "{}"
# create an instance of Goal from a JSON string
goal_instance = Goal.from_json(json)
# print the JSON string representation of the object
print(Goal.to_json())

# convert the object into a dict
goal_dict = goal_instance.to_dict()
# create an instance of Goal from a dict
goal_from_dict = Goal.from_dict(goal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


