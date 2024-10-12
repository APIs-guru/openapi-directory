# ScheduledMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results_limit** | **int** | The number of items returned in the results. This is the value specified in the ***limit*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 100.  | [optional] 
**results_offset** | **int** | The number of items skipped before the results were returned. This is the value specified in the ***offset*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 0.  | [optional] 
**results_total_available** | **int** | The total number of results available for retrieval. The ***offset*** and ***limit*** properties specify which of the total available results have been returned.  | [optional] 
**scheduled_messages** | [**List[ScheduledMessage]**](ScheduledMessage.md) | An array of ***scheduledMessage*** objects containing properties of each unsent scheduled message.  | [optional] 
**status_code** | **int** | The http status code returned - reflected in the body for convenience | [optional] 
**time_stamp** | **str** | The date/time the request was processed, in the format YYYYMMDDhhmmssSSS | [optional] 
**version** | **str** | The current version of the API of the endpoint that was called | [optional] 

## Example

```python
from openapi_client.models.scheduled_message_response import ScheduledMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledMessageResponse from a JSON string
scheduled_message_response_instance = ScheduledMessageResponse.from_json(json)
# print the JSON string representation of the object
print(ScheduledMessageResponse.to_json())

# convert the object into a dict
scheduled_message_response_dict = scheduled_message_response_instance.to_dict()
# create an instance of ScheduledMessageResponse from a dict
scheduled_message_response_from_dict = ScheduledMessageResponse.from_dict(scheduled_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


