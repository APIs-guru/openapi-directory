# Subscription

A *subscription* resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_details** | [**SubscriptionContentDetails**](SubscriptionContentDetails.md) |  | [optional] 
**etag** | **str** | Etag of this resource. | [optional] 
**id** | **str** | The ID that YouTube uses to uniquely identify the subscription. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#subscription\&quot;. | [optional] [default to 'youtube#subscription']
**snippet** | [**SubscriptionSnippet**](SubscriptionSnippet.md) |  | [optional] 
**subscriber_snippet** | [**SubscriptionSubscriberSnippet**](SubscriptionSubscriberSnippet.md) |  | [optional] 

## Example

```python
from openapi_client.models.subscription import Subscription

# TODO update the JSON string below
json = "{}"
# create an instance of Subscription from a JSON string
subscription_instance = Subscription.from_json(json)
# print the JSON string representation of the object
print(Subscription.to_json())

# convert the object into a dict
subscription_dict = subscription_instance.to_dict()
# create an instance of Subscription from a dict
subscription_from_dict = Subscription.from_dict(subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


