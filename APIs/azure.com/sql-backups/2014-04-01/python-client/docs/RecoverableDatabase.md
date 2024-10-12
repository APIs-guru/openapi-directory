# RecoverableDatabase

A recoverable database

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RecoverableDatabaseProperties**](RecoverableDatabaseProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recoverable_database import RecoverableDatabase

# TODO update the JSON string below
json = "{}"
# create an instance of RecoverableDatabase from a JSON string
recoverable_database_instance = RecoverableDatabase.from_json(json)
# print the JSON string representation of the object
print(RecoverableDatabase.to_json())

# convert the object into a dict
recoverable_database_dict = recoverable_database_instance.to_dict()
# create an instance of RecoverableDatabase from a dict
recoverable_database_from_dict = RecoverableDatabase.from_dict(recoverable_database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


