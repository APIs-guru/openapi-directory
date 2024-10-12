# RemoteRenderingAccountsGetKeys200Response

Developer Keys of account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_key** | **str** | value of primary key. | [optional] [readonly] 
**secondary_key** | **str** | value of secondary key. | [optional] [readonly] 

## Example

```python
from openapi_client.models.remote_rendering_accounts_get_keys200_response import RemoteRenderingAccountsGetKeys200Response

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteRenderingAccountsGetKeys200Response from a JSON string
remote_rendering_accounts_get_keys200_response_instance = RemoteRenderingAccountsGetKeys200Response.from_json(json)
# print the JSON string representation of the object
print(RemoteRenderingAccountsGetKeys200Response.to_json())

# convert the object into a dict
remote_rendering_accounts_get_keys200_response_dict = remote_rendering_accounts_get_keys200_response_instance.to_dict()
# create an instance of RemoteRenderingAccountsGetKeys200Response from a dict
remote_rendering_accounts_get_keys200_response_from_dict = RemoteRenderingAccountsGetKeys200Response.from_dict(remote_rendering_accounts_get_keys200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


