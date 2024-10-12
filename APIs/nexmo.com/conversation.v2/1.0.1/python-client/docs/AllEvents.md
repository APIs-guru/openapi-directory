# AllEvents


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**Member**](Member.md) |  | [optional] 
**conversation_id** | **str** | The ID of the Conversation that the member belongs to | [optional] 
**type** | **str** | The event type (&#x60;member:left&#x60;) | [optional] 
**links** | [**EventLinks**](EventLinks.md) |  | [optional] 
**var_from** | **str** | The member ID of the sender | [optional] 
**id** | **int** | The ID of the event | [optional] 
**timestamp** | **str** | The time that the event happened | [optional] 

## Example

```python
from openapi_client.models.all_events import AllEvents

# TODO update the JSON string below
json = "{}"
# create an instance of AllEvents from a JSON string
all_events_instance = AllEvents.from_json(json)
# print the JSON string representation of the object
print(AllEvents.to_json())

# convert the object into a dict
all_events_dict = all_events_instance.to_dict()
# create an instance of AllEvents from a dict
all_events_from_dict = AllEvents.from_dict(all_events_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


