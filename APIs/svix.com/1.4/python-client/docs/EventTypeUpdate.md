# EventTypeUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived** | **bool** |  | [optional] [default to False]
**description** | **str** |  | 
**feature_flag** | **str** |  | [optional] 
**schemas** | **Dict[str, object]** | The schema for the event type for a specific version as a JSON schema. | [optional] 

## Example

```python
from openapi_client.models.event_type_update import EventTypeUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of EventTypeUpdate from a JSON string
event_type_update_instance = EventTypeUpdate.from_json(json)
# print the JSON string representation of the object
print(EventTypeUpdate.to_json())

# convert the object into a dict
event_type_update_dict = event_type_update_instance.to_dict()
# create an instance of EventTypeUpdate from a dict
event_type_update_from_dict = EventTypeUpdate.from_dict(event_type_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


