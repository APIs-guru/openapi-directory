# UserTokenResult

Get User Token response details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Shared Access Authorization token for the User. | [optional] 

## Example

```python
from openapi_client.models.user_token_result import UserTokenResult

# TODO update the JSON string below
json = "{}"
# create an instance of UserTokenResult from a JSON string
user_token_result_instance = UserTokenResult.from_json(json)
# print the JSON string representation of the object
print(UserTokenResult.to_json())

# convert the object into a dict
user_token_result_dict = user_token_result_instance.to_dict()
# create an instance of UserTokenResult from a dict
user_token_result_from_dict = UserTokenResult.from_dict(user_token_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


