# WatchResponse

Push notification watch response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration** | **str** | When Gmail will stop sending notifications for mailbox updates (epoch millis). Call &#x60;watch&#x60; again before this time to renew the watch. | [optional] 
**history_id** | **str** | The ID of the mailbox&#39;s current history record. | [optional] 

## Example

```python
from openapi_client.models.watch_response import WatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WatchResponse from a JSON string
watch_response_instance = WatchResponse.from_json(json)
# print the JSON string representation of the object
print(WatchResponse.to_json())

# convert the object into a dict
watch_response_dict = watch_response_instance.to_dict()
# create an instance of WatchResponse from a dict
watch_response_from_dict = WatchResponse.from_dict(watch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


