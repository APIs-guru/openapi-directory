# ReadOnlyFollowingDatabase

Class representing a read only following database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ReadOnlyFollowingDatabaseProperties**](ReadOnlyFollowingDatabaseProperties.md) |  | [optional] 
**kind** | **str** | Kind of the database | 
**location** | **str** | Resource location. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.read_only_following_database import ReadOnlyFollowingDatabase

# TODO update the JSON string below
json = "{}"
# create an instance of ReadOnlyFollowingDatabase from a JSON string
read_only_following_database_instance = ReadOnlyFollowingDatabase.from_json(json)
# print the JSON string representation of the object
print(ReadOnlyFollowingDatabase.to_json())

# convert the object into a dict
read_only_following_database_dict = read_only_following_database_instance.to_dict()
# create an instance of ReadOnlyFollowingDatabase from a dict
read_only_following_database_from_dict = ReadOnlyFollowingDatabase.from_dict(read_only_following_database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


