# ActionCollection

A collection of actions.  *New in version 2.1.0* 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_entries** | **int** | Count of total objects in the current result set before pagination parameters (limit, offset) are applied.  | [optional] 
**actions** | [**List[Action]**](Action.md) |  | [optional] 

## Example

```python
from openapi_client.models.action_collection import ActionCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ActionCollection from a JSON string
action_collection_instance = ActionCollection.from_json(json)
# print the JSON string representation of the object
print(ActionCollection.to_json())

# convert the object into a dict
action_collection_dict = action_collection_instance.to_dict()
# create an instance of ActionCollection from a dict
action_collection_from_dict = ActionCollection.from_dict(action_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


