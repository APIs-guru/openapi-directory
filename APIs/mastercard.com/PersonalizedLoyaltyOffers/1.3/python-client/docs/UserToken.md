# UserToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** | Session identifier that is passed for subsequent API calls. | [optional] 

## Example

```python
from openapi_client.models.user_token import UserToken

# TODO update the JSON string below
json = "{}"
# create an instance of UserToken from a JSON string
user_token_instance = UserToken.from_json(json)
# print the JSON string representation of the object
print(UserToken.to_json())

# convert the object into a dict
user_token_dict = user_token_instance.to_dict()
# create an instance of UserToken from a dict
user_token_from_dict = UserToken.from_dict(user_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


