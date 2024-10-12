# NewMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipients** | [**List[MessageRecipientResponse]**](MessageRecipientResponse.md) | An array of messageRecipientResponse objects | [optional] 
**status_code** | **int** | The http status code returned - reflected in the body for convenience | [optional] 
**time_stamp** | **str** | The date/time the request was processed, in the format YYYYMMDDhhmmssSSS | [optional] 
**version** | **str** | The current version of the API of the endpoint that was called | [optional] 

## Example

```python
from openapi_client.models.new_message_response import NewMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NewMessageResponse from a JSON string
new_message_response_instance = NewMessageResponse.from_json(json)
# print the JSON string representation of the object
print(NewMessageResponse.to_json())

# convert the object into a dict
new_message_response_dict = new_message_response_instance.to_dict()
# create an instance of NewMessageResponse from a dict
new_message_response_from_dict = NewMessageResponse.from_dict(new_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


