# MessageDetailsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The message text that was sent.  | [optional] 
**recipients** | [**List[MessageRecipientResponse1]**](MessageRecipientResponse1.md) | An array of messageRecipientResponse objects | [optional] 

## Example

```python
from openapi_client.models.message_details_response import MessageDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MessageDetailsResponse from a JSON string
message_details_response_instance = MessageDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(MessageDetailsResponse.to_json())

# convert the object into a dict
message_details_response_dict = message_details_response_instance.to_dict()
# create an instance of MessageDetailsResponse from a dict
message_details_response_from_dict = MessageDetailsResponse.from_dict(message_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


