# WatchCreativesResponse

A response for the request to receive push notification when a bidder's creatives change status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription** | **str** | The Pub/Sub subscription that can be used to pull creative status notifications. This would be of the format &#x60;projects/{project_id}/subscriptions/{subscription_id}&#x60;. Subscription is created with pull delivery. All service accounts belonging to the bidder will have read access to this subscription. Subscriptions that are inactive for more than 90 days will be disabled. Use watchCreatives to re-enable the subscription. | [optional] 
**topic** | **str** | The Pub/Sub topic that will be used to publish creative serving status notifications. This would be of the format &#x60;projects/{project_id}/topics/{topic_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.watch_creatives_response import WatchCreativesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WatchCreativesResponse from a JSON string
watch_creatives_response_instance = WatchCreativesResponse.from_json(json)
# print the JSON string representation of the object
print(WatchCreativesResponse.to_json())

# convert the object into a dict
watch_creatives_response_dict = watch_creatives_response_instance.to_dict()
# create an instance of WatchCreativesResponse from a dict
watch_creatives_response_from_dict = WatchCreativesResponse.from_dict(watch_creatives_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


