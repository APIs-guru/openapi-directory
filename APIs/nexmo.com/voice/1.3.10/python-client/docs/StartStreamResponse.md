# StartStreamResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Description of the action taken | [optional] 
**uuid** | **str** | The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls | [optional] 

## Example

```python
from openapi_client.models.start_stream_response import StartStreamResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StartStreamResponse from a JSON string
start_stream_response_instance = StartStreamResponse.from_json(json)
# print the JSON string representation of the object
print(StartStreamResponse.to_json())

# convert the object into a dict
start_stream_response_dict = start_stream_response_instance.to_dict()
# create an instance of StartStreamResponse from a dict
start_stream_response_from_dict = StartStreamResponse.from_dict(start_stream_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


