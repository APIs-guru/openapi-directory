# MessageActionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**form_data** | **Dict[str, str]** | Data to execute command with | 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.message_action_request import MessageActionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MessageActionRequest from a JSON string
message_action_request_instance = MessageActionRequest.from_json(json)
# print the JSON string representation of the object
print(MessageActionRequest.to_json())

# convert the object into a dict
message_action_request_dict = message_action_request_instance.to_dict()
# create an instance of MessageActionRequest from a dict
message_action_request_from_dict = MessageActionRequest.from_dict(message_action_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


