# ManagedDatabase

A managed database resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ManagedDatabaseProperties**](ManagedDatabaseProperties.md) |  | [optional] 
**location** | **str** | Resource location. | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_database import ManagedDatabase

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedDatabase from a JSON string
managed_database_instance = ManagedDatabase.from_json(json)
# print the JSON string representation of the object
print(ManagedDatabase.to_json())

# convert the object into a dict
managed_database_dict = managed_database_instance.to_dict()
# create an instance of ManagedDatabase from a dict
managed_database_from_dict = ManagedDatabase.from_dict(managed_database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


