# ClusterUpdate

Class representing an update to a Kusto cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**Identity**](Identity.md) |  | [optional] 
**location** | **str** | Resource location. | [optional] 
**properties** | [**ClusterProperties**](ClusterProperties.md) |  | [optional] 
**sku** | [**AzureSku**](AzureSku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cluster_update import ClusterUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpdate from a JSON string
cluster_update_instance = ClusterUpdate.from_json(json)
# print the JSON string representation of the object
print(ClusterUpdate.to_json())

# convert the object into a dict
cluster_update_dict = cluster_update_instance.to_dict()
# create an instance of ClusterUpdate from a dict
cluster_update_from_dict = ClusterUpdate.from_dict(cluster_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


