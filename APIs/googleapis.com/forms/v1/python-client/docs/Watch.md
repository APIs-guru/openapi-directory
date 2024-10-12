# Watch

A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type. Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed. A watch expires seven days after it is created unless it is renewed with watches.renew

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp of when this was created. | [optional] [readonly] 
**error_type** | **str** | Output only. The most recent error type for an attempted delivery. To begin watching the form again a call can be made to watches.renew which also clears this error information. | [optional] [readonly] 
**event_type** | **str** | Required. Which event type to watch for. | [optional] 
**expire_time** | **str** | Output only. Timestamp for when this will expire. Each watches.renew call resets this to seven days in the future. | [optional] [readonly] 
**id** | **str** | Output only. The ID of this watch. See notes on CreateWatchRequest.watch_id. | [optional] [readonly] 
**state** | **str** | Output only. The current state of the watch. Additional details about suspended watches can be found by checking the &#x60;error_type&#x60;. | [optional] [readonly] 
**target** | [**WatchTarget**](WatchTarget.md) |  | [optional] 

## Example

```python
from openapi_client.models.watch import Watch

# TODO update the JSON string below
json = "{}"
# create an instance of Watch from a JSON string
watch_instance = Watch.from_json(json)
# print the JSON string representation of the object
print(Watch.to_json())

# convert the object into a dict
watch_dict = watch_instance.to_dict()
# create an instance of Watch from a dict
watch_from_dict = Watch.from_dict(watch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


