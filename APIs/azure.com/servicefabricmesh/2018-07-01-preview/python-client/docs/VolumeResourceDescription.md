# VolumeResourceDescription

This type describes a volume resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VolumeResourceProperties**](VolumeResourceProperties.md) |  | 
**location** | **str** | The geo-location where the resource lives | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.volume_resource_description import VolumeResourceDescription

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeResourceDescription from a JSON string
volume_resource_description_instance = VolumeResourceDescription.from_json(json)
# print the JSON string representation of the object
print(VolumeResourceDescription.to_json())

# convert the object into a dict
volume_resource_description_dict = volume_resource_description_instance.to_dict()
# create an instance of VolumeResourceDescription from a dict
volume_resource_description_from_dict = VolumeResourceDescription.from_dict(volume_resource_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


