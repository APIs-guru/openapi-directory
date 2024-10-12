# ImpactedResourceStatus

impactedResource with health status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Properties of impacted resource status. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.impacted_resource_status import ImpactedResourceStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ImpactedResourceStatus from a JSON string
impacted_resource_status_instance = ImpactedResourceStatus.from_json(json)
# print the JSON string representation of the object
print(ImpactedResourceStatus.to_json())

# convert the object into a dict
impacted_resource_status_dict = impacted_resource_status_instance.to_dict()
# create an instance of ImpactedResourceStatus from a dict
impacted_resource_status_from_dict = ImpactedResourceStatus.from_dict(impacted_resource_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


