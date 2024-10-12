# GetAllPostsChanges200ResponseChangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **datetime** | The UTC date and time when the post was changed. | [optional] 
**post_id** | **str** |  | [optional] 
**type** | **str** | The type of change.  One of: deleted, undeleted, satisfied, promised, unpromised, withdrawn, edited, expired  | [optional] 

## Example

```python
from openapi_client.models.get_all_posts_changes200_response_changes_inner import GetAllPostsChanges200ResponseChangesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllPostsChanges200ResponseChangesInner from a JSON string
get_all_posts_changes200_response_changes_inner_instance = GetAllPostsChanges200ResponseChangesInner.from_json(json)
# print the JSON string representation of the object
print(GetAllPostsChanges200ResponseChangesInner.to_json())

# convert the object into a dict
get_all_posts_changes200_response_changes_inner_dict = get_all_posts_changes200_response_changes_inner_instance.to_dict()
# create an instance of GetAllPostsChanges200ResponseChangesInner from a dict
get_all_posts_changes200_response_changes_inner_from_dict = GetAllPostsChanges200ResponseChangesInner.from_dict(get_all_posts_changes200_response_changes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


