# SyncGroup

Sync Group object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SyncGroupProperties**](SyncGroupProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_group import SyncGroup

# TODO update the JSON string below
json = "{}"
# create an instance of SyncGroup from a JSON string
sync_group_instance = SyncGroup.from_json(json)
# print the JSON string representation of the object
print(SyncGroup.to_json())

# convert the object into a dict
sync_group_dict = sync_group_instance.to_dict()
# create an instance of SyncGroup from a dict
sync_group_from_dict = SyncGroup.from_dict(sync_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


