# DatabaseAccountPatchProperties

Properties to update Azure Cosmos DB database accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capabilities** | [**List[Capability]**](Capability.md) | List of Cosmos DB capabilities for the account | [optional] 

## Example

```python
from openapi_client.models.database_account_patch_properties import DatabaseAccountPatchProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseAccountPatchProperties from a JSON string
database_account_patch_properties_instance = DatabaseAccountPatchProperties.from_json(json)
# print the JSON string representation of the object
print(DatabaseAccountPatchProperties.to_json())

# convert the object into a dict
database_account_patch_properties_dict = database_account_patch_properties_instance.to_dict()
# create an instance of DatabaseAccountPatchProperties from a dict
database_account_patch_properties_from_dict = DatabaseAccountPatchProperties.from_dict(database_account_patch_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


