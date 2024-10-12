# PostUserInfosList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[PostUserInfo]**](PostUserInfo.md) | The list of Posts with User information for the post, for this Blog. | [optional] 
**kind** | **str** | The kind of this entity. Always blogger#postList. | [optional] 
**next_page_token** | **str** | Pagination token to fetch the next page, if one exists. | [optional] 

## Example

```python
from openapi_client.models.post_user_infos_list import PostUserInfosList

# TODO update the JSON string below
json = "{}"
# create an instance of PostUserInfosList from a JSON string
post_user_infos_list_instance = PostUserInfosList.from_json(json)
# print the JSON string representation of the object
print(PostUserInfosList.to_json())

# convert the object into a dict
post_user_infos_list_dict = post_user_infos_list_instance.to_dict()
# create an instance of PostUserInfosList from a dict
post_user_infos_list_from_dict = PostUserInfosList.from_dict(post_user_infos_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


