# ReadWriteDatabase

Class representing a read write database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ReadWriteDatabaseProperties**](ReadWriteDatabaseProperties.md) |  | [optional] 
**kind** | **str** | Kind of the database | 
**location** | **str** | Resource location. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.read_write_database import ReadWriteDatabase

# TODO update the JSON string below
json = "{}"
# create an instance of ReadWriteDatabase from a JSON string
read_write_database_instance = ReadWriteDatabase.from_json(json)
# print the JSON string representation of the object
print(ReadWriteDatabase.to_json())

# convert the object into a dict
read_write_database_dict = read_write_database_instance.to_dict()
# create an instance of ReadWriteDatabase from a dict
read_write_database_from_dict = ReadWriteDatabase.from_dict(read_write_database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


