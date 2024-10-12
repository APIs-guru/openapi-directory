# RecoverableManagedDatabaseProperties

The recoverable managed database's properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_available_backup_date** | **str** | The last available backup date. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recoverable_managed_database_properties import RecoverableManagedDatabaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecoverableManagedDatabaseProperties from a JSON string
recoverable_managed_database_properties_instance = RecoverableManagedDatabaseProperties.from_json(json)
# print the JSON string representation of the object
print(RecoverableManagedDatabaseProperties.to_json())

# convert the object into a dict
recoverable_managed_database_properties_dict = recoverable_managed_database_properties_instance.to_dict()
# create an instance of RecoverableManagedDatabaseProperties from a dict
recoverable_managed_database_properties_from_dict = RecoverableManagedDatabaseProperties.from_dict(recoverable_managed_database_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


