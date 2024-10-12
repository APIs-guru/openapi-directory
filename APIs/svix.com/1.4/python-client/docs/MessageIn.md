# MessageIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | [**ApplicationIn**](ApplicationIn.md) |  | [optional] 
**channels** | **List[str]** | List of free-form identifiers that endpoints can filter by | [optional] 
**event_id** | **str** | Optional unique identifier for the message | [optional] 
**event_type** | **str** |  | 
**payload** | **object** |  | 
**payload_retention_period** | **int** | The retention period for the payload (in days). | [optional] [default to 90]

## Example

```python
from openapi_client.models.message_in import MessageIn

# TODO update the JSON string below
json = "{}"
# create an instance of MessageIn from a JSON string
message_in_instance = MessageIn.from_json(json)
# print the JSON string representation of the object
print(MessageIn.to_json())

# convert the object into a dict
message_in_dict = message_in_instance.to_dict()
# create an instance of MessageIn from a dict
message_in_from_dict = MessageIn.from_dict(message_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


