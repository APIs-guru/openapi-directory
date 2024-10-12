# UserApiTokensList200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | The creation time | 
**description** | **str** | The description of the token | [optional] 
**id** | **str** | The unique id (UUID) of the api token | 
**scope** | **List[str]** | The scope for this token. | [optional] 

## Example

```python
from openapi_client.models.user_api_tokens_list200_response_inner import UserApiTokensList200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of UserApiTokensList200ResponseInner from a JSON string
user_api_tokens_list200_response_inner_instance = UserApiTokensList200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(UserApiTokensList200ResponseInner.to_json())

# convert the object into a dict
user_api_tokens_list200_response_inner_dict = user_api_tokens_list200_response_inner_instance.to_dict()
# create an instance of UserApiTokensList200ResponseInner from a dict
user_api_tokens_list200_response_inner_from_dict = UserApiTokensList200ResponseInner.from_dict(user_api_tokens_list200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


