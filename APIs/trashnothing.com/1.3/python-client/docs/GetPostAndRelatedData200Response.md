# GetPostAndRelatedData200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**User**](User.md) |  | [optional] 
**author_offer_count** | **int** | Count of offer posts made by the post author in the last 90 days. | [optional] 
**author_posts** | [**List[Post]**](Post.md) | Other active posts from the post author in the last 90 days. A maximum of 30 posts will be returned.  | [optional] 
**author_wanted_count** | **int** | Count of wanted posts made by the post author in the last 90 days. | [optional] 
**bookmarked** | **bool** | Whether or not the current user has bookmarked this post.  Will be null for api key requests and for the current users&#39; posts. | [optional] 
**feedback** | [**List[Feedback]**](Feedback.md) | Feedback the current user has left on the post author. | [optional] 
**groups** | [**List[Group]**](Group.md) | The groups the post is published on. | [optional] 
**post** | [**Post**](Post.md) |  | [optional] 
**replied** | **bool** | Whether or not the current user has replied to this post.  Will be null for api key requests and for the current users&#39; posts. | [optional] 
**user_can_reply** | **bool** | Whether or not the current user (if any) can reply to this post. Unverified users cannot reply to posts until they verify their account.  | [optional] 
**viewed** | **bool** | Whether or not the current user has previously viewed this post.  Will be null for api key requests and for the current users&#39; posts. | [optional] 

## Example

```python
from openapi_client.models.get_post_and_related_data200_response import GetPostAndRelatedData200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetPostAndRelatedData200Response from a JSON string
get_post_and_related_data200_response_instance = GetPostAndRelatedData200Response.from_json(json)
# print the JSON string representation of the object
print(GetPostAndRelatedData200Response.to_json())

# convert the object into a dict
get_post_and_related_data200_response_dict = get_post_and_related_data200_response_instance.to_dict()
# create an instance of GetPostAndRelatedData200Response from a dict
get_post_and_related_data200_response_from_dict = GetPostAndRelatedData200Response.from_dict(get_post_and_related_data200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


