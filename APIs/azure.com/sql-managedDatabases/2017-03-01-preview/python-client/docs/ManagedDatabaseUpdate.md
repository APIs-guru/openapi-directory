# ManagedDatabaseUpdate

An managed database update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ManagedDatabaseProperties**](ManagedDatabaseProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.managed_database_update import ManagedDatabaseUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedDatabaseUpdate from a JSON string
managed_database_update_instance = ManagedDatabaseUpdate.from_json(json)
# print the JSON string representation of the object
print(ManagedDatabaseUpdate.to_json())

# convert the object into a dict
managed_database_update_dict = managed_database_update_instance.to_dict()
# create an instance of ManagedDatabaseUpdate from a dict
managed_database_update_from_dict = ManagedDatabaseUpdate.from_dict(managed_database_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


