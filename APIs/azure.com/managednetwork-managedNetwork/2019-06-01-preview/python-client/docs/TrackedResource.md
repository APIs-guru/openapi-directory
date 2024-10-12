# TrackedResource

The resource model definition for a ARM tracked top level resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**location** | **str** | The geo-location where the resource lives | [optional] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tracked_resource import TrackedResource

# TODO update the JSON string below
json = "{}"
# create an instance of TrackedResource from a JSON string
tracked_resource_instance = TrackedResource.from_json(json)
# print the JSON string representation of the object
print(TrackedResource.to_json())

# convert the object into a dict
tracked_resource_dict = tracked_resource_instance.to_dict()
# create an instance of TrackedResource from a dict
tracked_resource_from_dict = TrackedResource.from_dict(tracked_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


