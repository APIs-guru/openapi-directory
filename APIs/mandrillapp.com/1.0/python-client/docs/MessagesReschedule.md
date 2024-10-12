# MessagesReschedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**send_at** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.messages_reschedule import MessagesReschedule

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesReschedule from a JSON string
messages_reschedule_instance = MessagesReschedule.from_json(json)
# print the JSON string representation of the object
print(MessagesReschedule.to_json())

# convert the object into a dict
messages_reschedule_dict = messages_reschedule_instance.to_dict()
# create an instance of MessagesReschedule from a dict
messages_reschedule_from_dict = MessagesReschedule.from_dict(messages_reschedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


