# StartActivityIntent

A starting intent specified by an action, uri, and categories.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Action name. Required for START_ACTIVITY. | [optional] 
**categories** | **List[str]** | Intent categories to set on the intent. | [optional] 
**uri** | **str** | URI for the action. | [optional] 

## Example

```python
from openapi_client.models.start_activity_intent import StartActivityIntent

# TODO update the JSON string below
json = "{}"
# create an instance of StartActivityIntent from a JSON string
start_activity_intent_instance = StartActivityIntent.from_json(json)
# print the JSON string representation of the object
print(StartActivityIntent.to_json())

# convert the object into a dict
start_activity_intent_dict = start_activity_intent_instance.to_dict()
# create an instance of StartActivityIntent from a dict
start_activity_intent_from_dict = StartActivityIntent.from_dict(start_activity_intent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


