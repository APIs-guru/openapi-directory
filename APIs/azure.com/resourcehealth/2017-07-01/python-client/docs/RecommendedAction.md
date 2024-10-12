# RecommendedAction

Lists actions the user can take based on the current availabilityState of the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Recommended action. | [optional] 
**action_url** | **str** | Link to the action | [optional] 
**action_url_text** | **str** | Substring of action, it describes which text should host the action url. | [optional] 

## Example

```python
from openapi_client.models.recommended_action import RecommendedAction

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedAction from a JSON string
recommended_action_instance = RecommendedAction.from_json(json)
# print the JSON string representation of the object
print(RecommendedAction.to_json())

# convert the object into a dict
recommended_action_dict = recommended_action_instance.to_dict()
# create an instance of RecommendedAction from a dict
recommended_action_from_dict = RecommendedAction.from_dict(recommended_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


