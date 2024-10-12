# RestorableDroppedManagedDatabase

A restorable dropped managed database resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RestorableDroppedManagedDatabaseProperties**](RestorableDroppedManagedDatabaseProperties.md) |  | [optional] 
**location** | **str** | Resource location. | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.restorable_dropped_managed_database import RestorableDroppedManagedDatabase

# TODO update the JSON string below
json = "{}"
# create an instance of RestorableDroppedManagedDatabase from a JSON string
restorable_dropped_managed_database_instance = RestorableDroppedManagedDatabase.from_json(json)
# print the JSON string representation of the object
print(RestorableDroppedManagedDatabase.to_json())

# convert the object into a dict
restorable_dropped_managed_database_dict = restorable_dropped_managed_database_instance.to_dict()
# create an instance of RestorableDroppedManagedDatabase from a dict
restorable_dropped_managed_database_from_dict = RestorableDroppedManagedDatabase.from_dict(restorable_dropped_managed_database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


