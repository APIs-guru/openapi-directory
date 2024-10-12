# DatabaseUpdate

Class representing an update to a Kusto database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | An ETag of the resource updated. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**properties** | [**DatabaseProperties**](DatabaseProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_update import DatabaseUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseUpdate from a JSON string
database_update_instance = DatabaseUpdate.from_json(json)
# print the JSON string representation of the object
print(DatabaseUpdate.to_json())

# convert the object into a dict
database_update_dict = database_update_instance.to_dict()
# create an instance of DatabaseUpdate from a dict
database_update_from_dict = DatabaseUpdate.from_dict(database_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


