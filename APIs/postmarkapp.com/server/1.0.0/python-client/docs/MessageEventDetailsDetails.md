# MessageEventDetailsDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounce_id** | **str** |  | [optional] 
**delivery_message** | **str** |  | [optional] 
**destination_ip** | **str** |  | [optional] 
**destination_server** | **str** |  | [optional] 
**summary** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.message_event_details_details import MessageEventDetailsDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MessageEventDetailsDetails from a JSON string
message_event_details_details_instance = MessageEventDetailsDetails.from_json(json)
# print the JSON string representation of the object
print(MessageEventDetailsDetails.to_json())

# convert the object into a dict
message_event_details_details_dict = message_event_details_details_instance.to_dict()
# create an instance of MessageEventDetailsDetails from a dict
message_event_details_details_from_dict = MessageEventDetailsDetails.from_dict(message_event_details_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


