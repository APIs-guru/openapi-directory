# SeekSubscriptionRequest

Request for SeekSubscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**named_target** | **str** | Seek to a named position with respect to the message backlog. | [optional] 
**time_target** | [**TimeTarget**](TimeTarget.md) |  | [optional] 

## Example

```python
from openapi_client.models.seek_subscription_request import SeekSubscriptionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SeekSubscriptionRequest from a JSON string
seek_subscription_request_instance = SeekSubscriptionRequest.from_json(json)
# print the JSON string representation of the object
print(SeekSubscriptionRequest.to_json())

# convert the object into a dict
seek_subscription_request_dict = seek_subscription_request_instance.to_dict()
# create an instance of SeekSubscriptionRequest from a dict
seek_subscription_request_from_dict = SeekSubscriptionRequest.from_dict(seek_subscription_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


