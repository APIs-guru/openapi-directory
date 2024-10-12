# AuthInfoUpdateParameters

The authorization properties for accessing the source code repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_in** | **int** | Time in seconds that the token remains valid | [optional] 
**refresh_token** | **str** | The refresh token used to refresh the access token. | [optional] 
**scope** | **str** | The scope of the access token. | [optional] 
**token** | **str** | The access token used to access the source control provider. | [optional] 
**token_type** | **str** | The type of Auth token. | [optional] 

## Example

```python
from openapi_client.models.auth_info_update_parameters import AuthInfoUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AuthInfoUpdateParameters from a JSON string
auth_info_update_parameters_instance = AuthInfoUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(AuthInfoUpdateParameters.to_json())

# convert the object into a dict
auth_info_update_parameters_dict = auth_info_update_parameters_instance.to_dict()
# create an instance of AuthInfoUpdateParameters from a dict
auth_info_update_parameters_from_dict = AuthInfoUpdateParameters.from_dict(auth_info_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


