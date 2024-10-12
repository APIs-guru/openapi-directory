# SandboxUser

User data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**List[SandboxBankAccount]**](SandboxBankAccount.md) | List of accounts | [optional] 
**cards** | [**List[SandboxCard]**](SandboxCard.md) | List of cards | [optional] 
**retry_cache_entries** | [**List[SandboxRetryCacheEntry]**](SandboxRetryCacheEntry.md) | Retry cache entries | [optional] 
**user_id** | **str** | Connected user id | [optional] 

## Example

```python
from openapi_client.models.sandbox_user import SandboxUser

# TODO update the JSON string below
json = "{}"
# create an instance of SandboxUser from a JSON string
sandbox_user_instance = SandboxUser.from_json(json)
# print the JSON string representation of the object
print(SandboxUser.to_json())

# convert the object into a dict
sandbox_user_dict = sandbox_user_instance.to_dict()
# create an instance of SandboxUser from a dict
sandbox_user_from_dict = SandboxUser.from_dict(sandbox_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


