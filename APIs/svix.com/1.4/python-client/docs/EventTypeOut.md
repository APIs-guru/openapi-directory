# EventTypeOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived** | **bool** |  | [optional] [default to False]
**created_at** | **datetime** |  | 
**description** | **str** |  | 
**feature_flag** | **str** |  | [optional] 
**name** | **str** |  | 
**schemas** | **Dict[str, object]** | The schema for the event type for a specific version as a JSON schema. | [optional] 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi_client.models.event_type_out import EventTypeOut

# TODO update the JSON string below
json = "{}"
# create an instance of EventTypeOut from a JSON string
event_type_out_instance = EventTypeOut.from_json(json)
# print the JSON string representation of the object
print(EventTypeOut.to_json())

# convert the object into a dict
event_type_out_dict = event_type_out_instance.to_dict()
# create an instance of EventTypeOut from a dict
event_type_out_from_dict = EventTypeOut.from_dict(event_type_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


