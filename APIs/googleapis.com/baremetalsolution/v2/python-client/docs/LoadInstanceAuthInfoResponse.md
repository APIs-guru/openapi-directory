# LoadInstanceAuthInfoResponse

Response for LoadInstanceAuthInfo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ssh_keys** | [**List[SSHKey]**](SSHKey.md) | List of ssh keys. | [optional] 
**user_accounts** | [**Dict[str, UserAccount]**](UserAccount.md) | Map of username to the user account info. | [optional] 

## Example

```python
from openapi_client.models.load_instance_auth_info_response import LoadInstanceAuthInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LoadInstanceAuthInfoResponse from a JSON string
load_instance_auth_info_response_instance = LoadInstanceAuthInfoResponse.from_json(json)
# print the JSON string representation of the object
print(LoadInstanceAuthInfoResponse.to_json())

# convert the object into a dict
load_instance_auth_info_response_dict = load_instance_auth_info_response_instance.to_dict()
# create an instance of LoadInstanceAuthInfoResponse from a dict
load_instance_auth_info_response_from_dict = LoadInstanceAuthInfoResponse.from_dict(load_instance_auth_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


