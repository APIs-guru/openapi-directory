# RecoverableManagedDatabase

A recoverable managed database resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RecoverableManagedDatabaseProperties**](RecoverableManagedDatabaseProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recoverable_managed_database import RecoverableManagedDatabase

# TODO update the JSON string below
json = "{}"
# create an instance of RecoverableManagedDatabase from a JSON string
recoverable_managed_database_instance = RecoverableManagedDatabase.from_json(json)
# print the JSON string representation of the object
print(RecoverableManagedDatabase.to_json())

# convert the object into a dict
recoverable_managed_database_dict = recoverable_managed_database_instance.to_dict()
# create an instance of RecoverableManagedDatabase from a dict
recoverable_managed_database_from_dict = RecoverableManagedDatabase.from_dict(recoverable_managed_database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


