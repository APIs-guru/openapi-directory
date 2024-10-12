# SourceControlAuthInfo

The authorization properties for accessing the source code repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_in** | **int** | Time in seconds that the token remains valid | [optional] 
**refresh_token** | **str** | The refresh token used to refresh the access token. | [optional] 
**scope** | **str** | The scope of the access token. | [optional] 
**token** | **str** | The access token used to access the source control provider. | 
**token_type** | **str** | The type of Auth token. | [optional] 

## Example

```python
from openapi_client.models.source_control_auth_info import SourceControlAuthInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlAuthInfo from a JSON string
source_control_auth_info_instance = SourceControlAuthInfo.from_json(json)
# print the JSON string representation of the object
print(SourceControlAuthInfo.to_json())

# convert the object into a dict
source_control_auth_info_dict = source_control_auth_info_instance.to_dict()
# create an instance of SourceControlAuthInfo from a dict
source_control_auth_info_from_dict = SourceControlAuthInfo.from_dict(source_control_auth_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


