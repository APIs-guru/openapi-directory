# AccountPatch

The patch of EngagementFabric account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | The tags of the resource | [optional] 

## Example

```python
from openapi_client.models.account_patch import AccountPatch

# TODO update the JSON string below
json = "{}"
# create an instance of AccountPatch from a JSON string
account_patch_instance = AccountPatch.from_json(json)
# print the JSON string representation of the object
print(AccountPatch.to_json())

# convert the object into a dict
account_patch_dict = account_patch_instance.to_dict()
# create an instance of AccountPatch from a dict
account_patch_from_dict = AccountPatch.from_dict(account_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


