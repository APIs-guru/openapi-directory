# PullBatchRequest

Request for the PullBatch method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_events** | **int** | The maximum number of PubsubEvents returned for this request. The Pub/Sub system may return fewer than the number of events specified. | [optional] 
**return_immediately** | **bool** | If this is specified as true the system will respond immediately even if it is not able to return a message in the Pull response. Otherwise the system is allowed to wait until at least one message is available rather than returning no messages. The client may cancel the request if it does not wish to wait any longer for the response. | [optional] 
**subscription** | **str** | The subscription from which messages should be pulled. | [optional] 

## Example

```python
from openapi_client.models.pull_batch_request import PullBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PullBatchRequest from a JSON string
pull_batch_request_instance = PullBatchRequest.from_json(json)
# print the JSON string representation of the object
print(PullBatchRequest.to_json())

# convert the object into a dict
pull_batch_request_dict = pull_batch_request_instance.to_dict()
# create an instance of PullBatchRequest from a dict
pull_batch_request_from_dict = PullBatchRequest.from_dict(pull_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


