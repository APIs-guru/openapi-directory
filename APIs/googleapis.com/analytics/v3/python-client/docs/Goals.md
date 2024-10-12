# Goals

A goal collection lists Analytics goals to which the user has access. Each view (profile) can have a set of goals. Each resource in the Goal collection corresponds to a single Analytics goal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Goal]**](Goal.md) | A list of goals. | [optional] 
**items_per_page** | **int** | The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. | [optional] 
**kind** | **str** | Collection type. | [optional] [default to 'analytics#goals']
**next_link** | **str** | Link to next page for this goal collection. | [optional] 
**previous_link** | **str** | Link to previous page for this goal collection. | [optional] 
**start_index** | **int** | The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. | [optional] 
**total_results** | **int** | The total number of results for the query, regardless of the number of resources in the result. | [optional] 
**username** | **str** | Email ID of the authenticated user | [optional] 

## Example

```python
from openapi_client.models.goals import Goals

# TODO update the JSON string below
json = "{}"
# create an instance of Goals from a JSON string
goals_instance = Goals.from_json(json)
# print the JSON string representation of the object
print(Goals.to_json())

# convert the object into a dict
goals_dict = goals_instance.to_dict()
# create an instance of Goals from a dict
goals_from_dict = Goals.from_dict(goals_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


