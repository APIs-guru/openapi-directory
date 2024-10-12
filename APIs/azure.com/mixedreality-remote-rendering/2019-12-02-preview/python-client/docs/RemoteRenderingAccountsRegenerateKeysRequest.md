# RemoteRenderingAccountsRegenerateKeysRequest

Request for account key regeneration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serial** | **int** | serial of key to be regenerated | [optional] 

## Example

```python
from openapi_client.models.remote_rendering_accounts_regenerate_keys_request import RemoteRenderingAccountsRegenerateKeysRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteRenderingAccountsRegenerateKeysRequest from a JSON string
remote_rendering_accounts_regenerate_keys_request_instance = RemoteRenderingAccountsRegenerateKeysRequest.from_json(json)
# print the JSON string representation of the object
print(RemoteRenderingAccountsRegenerateKeysRequest.to_json())

# convert the object into a dict
remote_rendering_accounts_regenerate_keys_request_dict = remote_rendering_accounts_regenerate_keys_request_instance.to_dict()
# create an instance of RemoteRenderingAccountsRegenerateKeysRequest from a dict
remote_rendering_accounts_regenerate_keys_request_from_dict = RemoteRenderingAccountsRegenerateKeysRequest.from_dict(remote_rendering_accounts_regenerate_keys_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


