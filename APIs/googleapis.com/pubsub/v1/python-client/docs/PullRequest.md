# PullRequest

Request for the `Pull` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_messages** | **int** | Required. The maximum number of messages to return for this request. Must be a positive integer. The Pub/Sub system may return fewer than the number specified. | [optional] 
**return_immediately** | **bool** | Optional. If this field set to true, the system will respond immediately even if it there are no messages available to return in the &#x60;Pull&#x60; response. Otherwise, the system may wait (for a bounded amount of time) until at least one message is available, rather than returning no messages. Warning: setting this field to &#x60;true&#x60; is discouraged because it adversely impacts the performance of &#x60;Pull&#x60; operations. We recommend that users do not set this field. | [optional] 

## Example

```python
from openapi_client.models.pull_request import PullRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PullRequest from a JSON string
pull_request_instance = PullRequest.from_json(json)
# print the JSON string representation of the object
print(PullRequest.to_json())

# convert the object into a dict
pull_request_dict = pull_request_instance.to_dict()
# create an instance of PullRequest from a dict
pull_request_from_dict = PullRequest.from_dict(pull_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


