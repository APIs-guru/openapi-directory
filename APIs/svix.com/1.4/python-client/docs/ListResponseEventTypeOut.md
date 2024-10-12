# ListResponseEventTypeOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EventTypeOut]**](EventTypeOut.md) |  | 
**done** | **bool** |  | 
**iterator** | **str** |  | [optional] 
**prev_iterator** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.list_response_event_type_out import ListResponseEventTypeOut

# TODO update the JSON string below
json = "{}"
# create an instance of ListResponseEventTypeOut from a JSON string
list_response_event_type_out_instance = ListResponseEventTypeOut.from_json(json)
# print the JSON string representation of the object
print(ListResponseEventTypeOut.to_json())

# convert the object into a dict
list_response_event_type_out_dict = list_response_event_type_out_instance.to_dict()
# create an instance of ListResponseEventTypeOut from a dict
list_response_event_type_out_from_dict = ListResponseEventTypeOut.from_dict(list_response_event_type_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


