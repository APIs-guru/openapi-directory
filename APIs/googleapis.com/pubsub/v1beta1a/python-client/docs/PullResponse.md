# PullResponse

Either a PubsubMessage or a truncation event. One of these two must be populated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ack_id** | **str** | This ID must be used to acknowledge the received event or message. | [optional] 
**pubsub_event** | [**PubsubEvent**](PubsubEvent.md) |  | [optional] 

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


