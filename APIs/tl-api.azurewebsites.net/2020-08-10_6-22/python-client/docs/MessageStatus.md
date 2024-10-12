# MessageStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** |  | [optional] 
**reference_id** | **int** |  | [optional] 
**source** | **object** |  | [optional] 
**status_id** | **int** |  | [optional] 
**status_text** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.message_status import MessageStatus

# TODO update the JSON string below
json = "{}"
# create an instance of MessageStatus from a JSON string
message_status_instance = MessageStatus.from_json(json)
# print the JSON string representation of the object
print(MessageStatus.to_json())

# convert the object into a dict
message_status_dict = message_status_instance.to_dict()
# create an instance of MessageStatus from a dict
message_status_from_dict = MessageStatus.from_dict(message_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


