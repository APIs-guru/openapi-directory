# AuthInfo

The authorization properties for accessing the source code repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_in** | **int** | Time in seconds that the token remains valid | [optional] 
**refresh_token** | **str** | The refresh token used to refresh the access token. | [optional] 
**scope** | **str** | The scope of the access token. | [optional] 
**token** | **str** | The access token used to access the source control provider. | 
**token_type** | **str** | The type of Auth token. | 

## Example

```python
from openapi_client.models.auth_info import AuthInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AuthInfo from a JSON string
auth_info_instance = AuthInfo.from_json(json)
# print the JSON string representation of the object
print(AuthInfo.to_json())

# convert the object into a dict
auth_info_dict = auth_info_instance.to_dict()
# create an instance of AuthInfo from a dict
auth_info_from_dict = AuthInfo.from_dict(auth_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


