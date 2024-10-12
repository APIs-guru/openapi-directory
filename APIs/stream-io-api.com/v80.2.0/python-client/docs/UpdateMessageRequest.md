# UpdateMessageRequest

Contains all information needed to update a message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | [**MessageRequest**](MessageRequest.md) |  | 
**pending_message_metadata** | **Dict[str, str]** |  | [optional] 
**skip_enrich_url** | **bool** | Do not try to enrich the links within message | [optional] 

## Example

```python
from openapi_client.models.update_message_request import UpdateMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMessageRequest from a JSON string
update_message_request_instance = UpdateMessageRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateMessageRequest.to_json())

# convert the object into a dict
update_message_request_dict = update_message_request_instance.to_dict()
# create an instance of UpdateMessageRequest from a dict
update_message_request_from_dict = UpdateMessageRequest.from_dict(update_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


