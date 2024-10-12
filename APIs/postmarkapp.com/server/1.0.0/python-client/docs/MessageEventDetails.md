# MessageEventDetails



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**MessageEventDetailsDetails**](MessageEventDetailsDetails.md) |  | [optional] 
**received_at** | **datetime** |  | [optional] 
**recipient** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.message_event_details import MessageEventDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MessageEventDetails from a JSON string
message_event_details_instance = MessageEventDetails.from_json(json)
# print the JSON string representation of the object
print(MessageEventDetails.to_json())

# convert the object into a dict
message_event_details_dict = message_event_details_instance.to_dict()
# create an instance of MessageEventDetails from a dict
message_event_details_from_dict = MessageEventDetails.from_dict(message_event_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


