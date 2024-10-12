# IncomingMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incoming_messages** | [**List[IncomingMessage]**](IncomingMessage.md) | An array of ***incomingMessage*** objects containing properties of each incoming message.  | [optional] 
**results_limit** | **int** | The number of items returned in the results. This is the value specified in the ***limit*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 100.  | [optional] 
**results_offset** | **int** | The number of items skipped before the results were returned. This is the value specified in the ***offset*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 0.  | [optional] 
**results_total_available** | **int** | The total number of results available for retrieval. The ***offset*** and ***limit*** properties specify which of the total available results have been returned.  | [optional] 
**status_code** | **int** | The http status code returned - reflected in the body for convenience | [optional] 
**time_stamp** | **str** | The date/time the request was processed, in the format YYYYMMDDhhmmssSSS | [optional] 
**version** | **str** | The current version of the API of the endpoint that was called | [optional] 

## Example

```python
from openapi_client.models.incoming_message_response import IncomingMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IncomingMessageResponse from a JSON string
incoming_message_response_instance = IncomingMessageResponse.from_json(json)
# print the JSON string representation of the object
print(IncomingMessageResponse.to_json())

# convert the object into a dict
incoming_message_response_dict = incoming_message_response_instance.to_dict()
# create an instance of IncomingMessageResponse from a dict
incoming_message_response_from_dict = IncomingMessageResponse.from_dict(incoming_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


