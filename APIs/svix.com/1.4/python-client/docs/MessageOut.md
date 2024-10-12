# MessageOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | **List[str]** | List of free-form identifiers that endpoints can filter by | [optional] 
**event_id** | **str** | Optional unique identifier for the message | [optional] 
**event_type** | **str** |  | 
**id** | **str** |  | 
**payload** | **object** |  | 
**timestamp** | **datetime** |  | 

## Example

```python
from openapi_client.models.message_out import MessageOut

# TODO update the JSON string below
json = "{}"
# create an instance of MessageOut from a JSON string
message_out_instance = MessageOut.from_json(json)
# print the JSON string representation of the object
print(MessageOut.to_json())

# convert the object into a dict
message_out_dict = message_out_instance.to_dict()
# create an instance of MessageOut from a dict
message_out_from_dict = MessageOut.from_dict(message_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


