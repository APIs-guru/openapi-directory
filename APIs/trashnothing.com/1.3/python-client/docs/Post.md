# Post

An offer, wanted, admin, taken or received post.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** |  | [optional] 
**var_date** | **datetime** | The UTC date and time when the post was published. | [optional] 
**expiration** | **datetime** | The UTC date and time when the post will expire.   Currently only offer and wanted posts expire.  For all other posts, expiration is always null.  | [optional] 
**footer** | **str** | Some groups add footers to posts that are separate and sometimes unrelated to the post itself - such as reminders about group rules or features (may be null). | [optional] 
**group_id** | **str** | The group ID of the post.  For public posts, this is always null.  | [optional] 
**latitude** | **float** | May be null if a post hasn&#39;t been mapped. | [optional] 
**longitude** | **float** | May be null if a post hasn&#39;t been mapped. | [optional] 
**outcome** | **str** | For offer and wanted posts, this indicates the outcome of the post which is null if no outcome has been set yet.   &lt;br /&gt;&lt;br /&gt; Offer post outcomes will be one of: satisfied, withdrawn, promised, expired &lt;br /&gt;&lt;br /&gt; Wanted post outcomes will be one of: satisfied, withdrawn, expired &lt;br /&gt;&lt;br /&gt; For all other posts, outcome is always null.  | [optional] 
**photos** | [**List[Photo]**](Photo.md) | Details about the photos associated with this post (may be null if there are no photos). | [optional] 
**post_id** | **str** |  | [optional] 
**repost_count** | **int** | The count of how many times this post has been reposted in the last 90 days. A value of zero is used to indicate that the post is not a repost. The count is specific to the source of the post (eg. the specific group the post is on). If a post is crossposted to multiple groups, the repost_count of the post on each group may be different for each group depending on how many times the post has been posted on that group in the last 90 days.  | [optional] 
**reselling** | **bool** | For wanted posts, whether the item is being requested in order to resell it or not. Will be null for all posts that are not wanted posts and for wanted posts where the poster hasn&#39;t indicated whether or not they intend to resell the item they are requesting.  | [optional] 
**source** | **str** | The source of the post.  One of: groups, trashnothing, open_archive_groups.  A value of groups or open_archive_groups indicates the post is from a group and the group_id field will contain the ID of the group. A value of trashnothing indicates the post is a public post not associated with any group.  | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** | The type of post.  One of: offer, taken, wanted, received, admin  | [optional] 
**url** | **str** | The link to use to view the post on the trash nothing site. | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.post import Post

# TODO update the JSON string below
json = "{}"
# create an instance of Post from a JSON string
post_instance = Post.from_json(json)
# print the JSON string representation of the object
print(Post.to_json())

# convert the object into a dict
post_dict = post_instance.to_dict()
# create an instance of Post from a dict
post_from_dict = Post.from_dict(post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


