# GetAllPostsChanges200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changes** | [**List[GetAllPostsChanges200ResponseChangesInner]**](GetAllPostsChanges200ResponseChangesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_all_posts_changes200_response import GetAllPostsChanges200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllPostsChanges200Response from a JSON string
get_all_posts_changes200_response_instance = GetAllPostsChanges200Response.from_json(json)
# print the JSON string representation of the object
print(GetAllPostsChanges200Response.to_json())

# convert the object into a dict
get_all_posts_changes200_response_dict = get_all_posts_changes200_response_instance.to_dict()
# create an instance of GetAllPostsChanges200Response from a dict
get_all_posts_changes200_response_from_dict = GetAllPostsChanges200Response.from_dict(get_all_posts_changes200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


