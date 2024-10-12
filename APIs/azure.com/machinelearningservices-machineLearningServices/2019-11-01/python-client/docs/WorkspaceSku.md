# WorkspaceSku

Describes Workspace Sku details and features

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capabilities** | [**List[SKUCapability]**](SKUCapability.md) | List of features/user capabilities associated with the sku | [optional] [readonly] 
**location_info** | [**List[ResourceSkuLocationInfo]**](ResourceSkuLocationInfo.md) | A list of locations and availability zones in those locations where the SKU is available. | [optional] [readonly] 
**locations** | **List[str]** | The set of locations that the SKU is available. This will be supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**resource_type** | **str** |  | [optional] [readonly] 
**restrictions** | [**List[Restriction]**](Restriction.md) | The restrictions because of which SKU cannot be used. This is empty if there are no restrictions. | [optional] 
**tier** | **str** | Sku Tier like Basic or Enterprise | [optional] [readonly] 

## Example

```python
from openapi_client.models.workspace_sku import WorkspaceSku

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceSku from a JSON string
workspace_sku_instance = WorkspaceSku.from_json(json)
# print the JSON string representation of the object
print(WorkspaceSku.to_json())

# convert the object into a dict
workspace_sku_dict = workspace_sku_instance.to_dict()
# create an instance of WorkspaceSku from a dict
workspace_sku_from_dict = WorkspaceSku.from_dict(workspace_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


