# PullBatchResponse

Response for the PullBatch method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pull_responses** | [**List[PullResponse]**](PullResponse.md) | Received Pub/Sub messages or status events. The Pub/Sub system will return zero messages if there are no more messages available in the backlog. The Pub/Sub system may return fewer than the max_events requested even if there are more messages available in the backlog. | [optional] 

## Example

```python
from openapi_client.models.pull_batch_response import PullBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PullBatchResponse from a JSON string
pull_batch_response_instance = PullBatchResponse.from_json(json)
# print the JSON string representation of the object
print(PullBatchResponse.to_json())

# convert the object into a dict
pull_batch_response_dict = pull_batch_response_instance.to_dict()
# create an instance of PullBatchResponse from a dict
pull_batch_response_from_dict = PullBatchResponse.from_dict(pull_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


