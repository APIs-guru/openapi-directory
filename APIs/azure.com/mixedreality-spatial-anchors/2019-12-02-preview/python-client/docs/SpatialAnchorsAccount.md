# SpatialAnchorsAccount

SpatialAnchorsAccount Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Common Properties shared by Mixed Reality Accounts | [optional] 
**location** | **str** | The geo-location where the resource lives | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.spatial_anchors_account import SpatialAnchorsAccount

# TODO update the JSON string below
json = "{}"
# create an instance of SpatialAnchorsAccount from a JSON string
spatial_anchors_account_instance = SpatialAnchorsAccount.from_json(json)
# print the JSON string representation of the object
print(SpatialAnchorsAccount.to_json())

# convert the object into a dict
spatial_anchors_account_dict = spatial_anchors_account_instance.to_dict()
# create an instance of SpatialAnchorsAccount from a dict
spatial_anchors_account_from_dict = SpatialAnchorsAccount.from_dict(spatial_anchors_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


