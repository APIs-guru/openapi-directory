# PrivateAtlas

An Azure resource which represents which will provision the ability to create private location data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PrivateAtlasProperties**](PrivateAtlasProperties.md) |  | [optional] 
**location** | **str** | The geo-location where the resource lives | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.private_atlas import PrivateAtlas

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateAtlas from a JSON string
private_atlas_instance = PrivateAtlas.from_json(json)
# print the JSON string representation of the object
print(PrivateAtlas.to_json())

# convert the object into a dict
private_atlas_dict = private_atlas_instance.to_dict()
# create an instance of PrivateAtlas from a dict
private_atlas_from_dict = PrivateAtlas.from_dict(private_atlas_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


