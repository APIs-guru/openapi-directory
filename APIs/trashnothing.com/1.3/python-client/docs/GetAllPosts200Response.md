# GetAllPosts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**posts** | [**List[Post]**](Post.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_all_posts200_response import GetAllPosts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllPosts200Response from a JSON string
get_all_posts200_response_instance = GetAllPosts200Response.from_json(json)
# print the JSON string representation of the object
print(GetAllPosts200Response.to_json())

# convert the object into a dict
get_all_posts200_response_dict = get_all_posts200_response_instance.to_dict()
# create an instance of GetAllPosts200Response from a dict
get_all_posts200_response_from_dict = GetAllPosts200Response.from_dict(get_all_posts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


