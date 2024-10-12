# EventTypeIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived** | **bool** |  | [optional] [default to False]
**description** | **str** |  | 
**feature_flag** | **str** |  | [optional] 
**name** | **str** |  | 
**schemas** | **Dict[str, object]** | The schema for the event type for a specific version as a JSON schema. | [optional] 

## Example

```python
from openapi_client.models.event_type_in import EventTypeIn

# TODO update the JSON string below
json = "{}"
# create an instance of EventTypeIn from a JSON string
event_type_in_instance = EventTypeIn.from_json(json)
# print the JSON string representation of the object
print(EventTypeIn.to_json())

# convert the object into a dict
event_type_in_dict = event_type_in_instance.to_dict()
# create an instance of EventTypeIn from a dict
event_type_in_from_dict = EventTypeIn.from_dict(event_type_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


