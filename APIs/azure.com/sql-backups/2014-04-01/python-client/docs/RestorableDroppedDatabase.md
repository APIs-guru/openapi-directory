# RestorableDroppedDatabase

A restorable dropped database

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The geo-location where the resource lives | [optional] [readonly] 
**properties** | [**RestorableDroppedDatabaseProperties**](RestorableDroppedDatabaseProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.restorable_dropped_database import RestorableDroppedDatabase

# TODO update the JSON string below
json = "{}"
# create an instance of RestorableDroppedDatabase from a JSON string
restorable_dropped_database_instance = RestorableDroppedDatabase.from_json(json)
# print the JSON string representation of the object
print(RestorableDroppedDatabase.to_json())

# convert the object into a dict
restorable_dropped_database_dict = restorable_dropped_database_instance.to_dict()
# create an instance of RestorableDroppedDatabase from a dict
restorable_dropped_database_from_dict = RestorableDroppedDatabase.from_dict(restorable_dropped_database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


