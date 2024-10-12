# SubscriptionSnippet

Basic details about a subscription, including title, description and thumbnails of the subscribed item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** | The ID that YouTube uses to uniquely identify the subscriber&#39;s channel. | [optional] 
**channel_title** | **str** | Channel title for the channel that the subscription belongs to. | [optional] 
**description** | **str** | The subscription&#39;s details. | [optional] 
**published_at** | **datetime** | The date and time that the subscription was created. | [optional] 
**resource_id** | [**ResourceId**](ResourceId.md) |  | [optional] 
**thumbnails** | [**ThumbnailDetails**](ThumbnailDetails.md) |  | [optional] 
**title** | **str** | The subscription&#39;s title. | [optional] 

## Example

```python
from openapi_client.models.subscription_snippet import SubscriptionSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionSnippet from a JSON string
subscription_snippet_instance = SubscriptionSnippet.from_json(json)
# print the JSON string representation of the object
print(SubscriptionSnippet.to_json())

# convert the object into a dict
subscription_snippet_dict = subscription_snippet_instance.to_dict()
# create an instance of SubscriptionSnippet from a dict
subscription_snippet_from_dict = SubscriptionSnippet.from_dict(subscription_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


