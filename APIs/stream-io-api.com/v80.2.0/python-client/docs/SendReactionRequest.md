# SendReactionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**enforce_unique** | **bool** | Whether to replace all existing user reactions | [optional] 
**reaction** | [**ReactionRequest**](ReactionRequest.md) |  | 
**skip_push** | **bool** | Skips any mobile push notifications | [optional] 

## Example

```python
from openapi_client.models.send_reaction_request import SendReactionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendReactionRequest from a JSON string
send_reaction_request_instance = SendReactionRequest.from_json(json)
# print the JSON string representation of the object
print(SendReactionRequest.to_json())

# convert the object into a dict
send_reaction_request_dict = send_reaction_request_instance.to_dict()
# create an instance of SendReactionRequest from a dict
send_reaction_request_from_dict = SendReactionRequest.from_dict(send_reaction_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


