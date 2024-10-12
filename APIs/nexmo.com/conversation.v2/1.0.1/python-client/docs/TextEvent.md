# TextEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**EventLinks**](EventLinks.md) |  | [optional] 
**var_from** | **str** | The member ID of the sender | [optional] 
**id** | **int** | The ID of the event | [optional] 
**timestamp** | **str** | The time that the event happened | [optional] 
**body** | [**TextEventAllOfBody**](TextEventAllOfBody.md) |  | [optional] 
**conversation_id** | **str** | The ID of the Conversation that the member belongs to | [optional] 
**type** | **str** | The event type (&#x60;text&#x60;) | [optional] 

## Example

```python
from openapi_client.models.text_event import TextEvent

# TODO update the JSON string below
json = "{}"
# create an instance of TextEvent from a JSON string
text_event_instance = TextEvent.from_json(json)
# print the JSON string representation of the object
print(TextEvent.to_json())

# convert the object into a dict
text_event_dict = text_event_instance.to_dict()
# create an instance of TextEvent from a dict
text_event_from_dict = TextEvent.from_dict(text_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


