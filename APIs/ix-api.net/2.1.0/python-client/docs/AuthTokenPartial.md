# AuthTokenPartial

AuthToken

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** |  | [optional] 
**refresh_token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.auth_token_partial import AuthTokenPartial

# TODO update the JSON string below
json = "{}"
# create an instance of AuthTokenPartial from a JSON string
auth_token_partial_instance = AuthTokenPartial.from_json(json)
# print the JSON string representation of the object
print(AuthTokenPartial.to_json())

# convert the object into a dict
auth_token_partial_dict = auth_token_partial_instance.to_dict()
# create an instance of AuthTokenPartial from a dict
auth_token_partial_from_dict = AuthTokenPartial.from_dict(auth_token_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


