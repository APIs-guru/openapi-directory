# PostToken200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | Authentication token that should be given in every authenticated request to the API | [optional] 
**expires_in** | **int** | Validity of the token given in seconds, 3600s &#x3D; 1h by default | [optional] 
**refresh_token** | **str** | Use this token when your access token has expired. See &lt;a href&#x3D;\&quot;/documentation/authentication.html#refresh-an-expired-token\&quot;&gt;Refresh an expired token&lt;/a&gt; section for more details. | [optional] 
**scope** | **str** | Unused, always equal to \&quot;null\&quot; | [optional] 
**token_type** | **str** | Token type, always equal to \&quot;bearer\&quot; | [optional] 

## Example

```python
from openapi_client.models.post_token200_response import PostToken200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PostToken200Response from a JSON string
post_token200_response_instance = PostToken200Response.from_json(json)
# print the JSON string representation of the object
print(PostToken200Response.to_json())

# convert the object into a dict
post_token200_response_dict = post_token200_response_instance.to_dict()
# create an instance of PostToken200Response from a dict
post_token200_response_from_dict = PostToken200Response.from_dict(post_token200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


