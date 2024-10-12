# PullResponse

Response for the `Pull` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**received_messages** | [**List[ReceivedMessage]**](ReceivedMessage.md) | Optional. Received Pub/Sub messages. The list will be empty if there are no more messages available in the backlog, or if no messages could be returned before the request timeout. For JSON, the response can be entirely empty. The Pub/Sub system may return fewer than the &#x60;maxMessages&#x60; requested even if there are more messages available in the backlog. | [optional] 

## Example

```python
from openapi_client.models.pull_response import PullResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PullResponse from a JSON string
pull_response_instance = PullResponse.from_json(json)
# print the JSON string representation of the object
print(PullResponse.to_json())

# convert the object into a dict
pull_response_dict = pull_response_instance.to_dict()
# create an instance of PullResponse from a dict
pull_response_from_dict = PullResponse.from_dict(pull_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


