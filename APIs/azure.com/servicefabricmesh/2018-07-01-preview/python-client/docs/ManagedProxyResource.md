# ManagedProxyResource

The resource model definition for Azure Resource Manager proxy resource. It will have everything other than required location and tags. This proxy resource is explicitly created or updated by including it in the parent resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_proxy_resource import ManagedProxyResource

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedProxyResource from a JSON string
managed_proxy_resource_instance = ManagedProxyResource.from_json(json)
# print the JSON string representation of the object
print(ManagedProxyResource.to_json())

# convert the object into a dict
managed_proxy_resource_dict = managed_proxy_resource_instance.to_dict()
# create an instance of ManagedProxyResource from a dict
managed_proxy_resource_from_dict = ManagedProxyResource.from_dict(managed_proxy_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


