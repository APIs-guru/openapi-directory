# WatchCreativeRequest

A request for watching changes to creative Status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic** | **str** | The Pub/Sub topic to publish notifications to. This topic must already exist and must give permission to ad-exchange-buyside-reports@google.com to write to the topic. This should be the full resource name in \&quot;projects/{project_id}/topics/{topic_id}\&quot; format. | [optional] 

## Example

```python
from openapi_client.models.watch_creative_request import WatchCreativeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WatchCreativeRequest from a JSON string
watch_creative_request_instance = WatchCreativeRequest.from_json(json)
# print the JSON string representation of the object
print(WatchCreativeRequest.to_json())

# convert the object into a dict
watch_creative_request_dict = watch_creative_request_instance.to_dict()
# create an instance of WatchCreativeRequest from a dict
watch_creative_request_from_dict = WatchCreativeRequest.from_dict(watch_creative_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


