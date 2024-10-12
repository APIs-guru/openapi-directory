# GetPostsByIds200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forbidden** | **List[str]** | The IDs of posts that are forbidden for the current user. | [optional] 
**not_found** | **List[str]** | The IDs of posts that weren&#39;t found (may have been deleted or never existed). | [optional] 
**posts** | [**List[Post]**](Post.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_posts_by_ids200_response import GetPostsByIds200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetPostsByIds200Response from a JSON string
get_posts_by_ids200_response_instance = GetPostsByIds200Response.from_json(json)
# print the JSON string representation of the object
print(GetPostsByIds200Response.to_json())

# convert the object into a dict
get_posts_by_ids200_response_dict = get_posts_by_ids200_response_instance.to_dict()
# create an instance of GetPostsByIds200Response from a dict
get_posts_by_ids200_response_from_dict = GetPostsByIds200Response.from_dict(get_posts_by_ids200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


