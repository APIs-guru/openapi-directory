# ProxyResource

The resource model definition for Azure Resource Manager proxy resource. It will have everything other than required location and tags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**location** | **str** | The geo-location where the resource lives | [optional] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.proxy_resource import ProxyResource

# TODO update the JSON string below
json = "{}"
# create an instance of ProxyResource from a JSON string
proxy_resource_instance = ProxyResource.from_json(json)
# print the JSON string representation of the object
print(ProxyResource.to_json())

# convert the object into a dict
proxy_resource_dict = proxy_resource_instance.to_dict()
# create an instance of ProxyResource from a dict
proxy_resource_from_dict = ProxyResource.from_dict(proxy_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


