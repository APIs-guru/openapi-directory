# LocalPost

Represents a [local post](https://support.google.com/business/answer/7662907) for a location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_type** | **str** | The type of alert the post is created for. This field is only applicable for posts of topic_type Alert, and behaves as a sub-type of Alerts. | [optional] 
**call_to_action** | [**CallToAction**](CallToAction.md) |  | [optional] 
**create_time** | **str** | Output only. Time of the creation of the post. | [optional] 
**event** | [**LocalPostEvent**](LocalPostEvent.md) |  | [optional] 
**language_code** | **str** | The language of the local post. | [optional] 
**media** | [**List[MediaItem]**](MediaItem.md) | The media associated with the post. source_url is the only supported data field for a LocalPost MediaItem. | [optional] 
**name** | **str** | Output only. Google identifier for this local post in the form: &#x60;accounts/{account_id}/locations/{location_id}/localPosts/{local_post_id}&#x60; | [optional] 
**offer** | [**LocalPostOffer**](LocalPostOffer.md) |  | [optional] 
**search_url** | **str** | Output only. The link to the local post in Google search. This link can be used to share the post via social media, email, text, etc. | [optional] 
**state** | **str** | Output only. The state of the post, indicating what part of its lifecycle it is in. | [optional] 
**summary** | **str** | Description/body of the local post. | [optional] 
**topic_type** | **str** | Required. The topic type of the post: standard, event, offer, or alert. | [optional] 
**update_time** | **str** | Output only. Time of the last modification of the post made by the user. | [optional] 

## Example

```python
from openapi_client.models.local_post import LocalPost

# TODO update the JSON string below
json = "{}"
# create an instance of LocalPost from a JSON string
local_post_instance = LocalPost.from_json(json)
# print the JSON string representation of the object
print(LocalPost.to_json())

# convert the object into a dict
local_post_dict = local_post_instance.to_dict()
# create an instance of LocalPost from a dict
local_post_from_dict = LocalPost.from_dict(local_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


