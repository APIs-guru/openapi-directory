# StartTalkResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Description of the action taken | [optional] 
**uuid** | **str** | The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls | [optional] 

## Example

```python
from openapi_client.models.start_talk_response import StartTalkResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StartTalkResponse from a JSON string
start_talk_response_instance = StartTalkResponse.from_json(json)
# print the JSON string representation of the object
print(StartTalkResponse.to_json())

# convert the object into a dict
start_talk_response_dict = start_talk_response_instance.to_dict()
# create an instance of StartTalkResponse from a dict
start_talk_response_from_dict = StartTalkResponse.from_dict(start_talk_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


