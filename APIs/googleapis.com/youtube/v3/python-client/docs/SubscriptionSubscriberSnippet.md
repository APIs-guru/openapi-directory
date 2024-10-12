# SubscriptionSubscriberSnippet

Basic details about a subscription's subscriber including title, description, channel ID and thumbnails.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** | The channel ID of the subscriber. | [optional] 
**description** | **str** | The description of the subscriber. | [optional] 
**thumbnails** | [**ThumbnailDetails**](ThumbnailDetails.md) |  | [optional] 
**title** | **str** | The title of the subscriber. | [optional] 

## Example

```python
from openapi_client.models.subscription_subscriber_snippet import SubscriptionSubscriberSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionSubscriberSnippet from a JSON string
subscription_subscriber_snippet_instance = SubscriptionSubscriberSnippet.from_json(json)
# print the JSON string representation of the object
print(SubscriptionSubscriberSnippet.to_json())

# convert the object into a dict
subscription_subscriber_snippet_dict = subscription_subscriber_snippet_instance.to_dict()
# create an instance of SubscriptionSubscriberSnippet from a dict
subscription_subscriber_snippet_from_dict = SubscriptionSubscriberSnippet.from_dict(subscription_subscriber_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


