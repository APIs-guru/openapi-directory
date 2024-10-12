# ConfigContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_groups** | [**List[NestedClusterGroup]**](NestedClusterGroup.md) |  | [optional] 
**cluster_types** | [**List[NestedClusterType]**](NestedClusterType.md) |  | [optional] 
**clusters** | [**List[NestedCluster]**](NestedCluster.md) |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**data** | **object** |  | 
**description** | **str** |  | [optional] 
**device_types** | [**List[NestedDeviceType]**](NestedDeviceType.md) |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**is_active** | **bool** |  | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**locations** | [**List[NestedLocation]**](NestedLocation.md) |  | [optional] 
**name** | **str** |  | 
**platforms** | [**List[NestedPlatform]**](NestedPlatform.md) |  | [optional] 
**regions** | [**List[NestedRegion]**](NestedRegion.md) |  | [optional] 
**roles** | [**List[NestedDeviceRole]**](NestedDeviceRole.md) |  | [optional] 
**site_groups** | [**List[NestedSiteGroup]**](NestedSiteGroup.md) |  | [optional] 
**sites** | [**List[NestedSite]**](NestedSite.md) |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**tenant_groups** | [**List[NestedTenantGroup]**](NestedTenantGroup.md) |  | [optional] 
**tenants** | [**List[NestedTenant]**](NestedTenant.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**weight** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.config_context import ConfigContext

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigContext from a JSON string
config_context_instance = ConfigContext.from_json(json)
# print the JSON string representation of the object
print(ConfigContext.to_json())

# convert the object into a dict
config_context_dict = config_context_instance.to_dict()
# create an instance of ConfigContext from a dict
config_context_from_dict = ConfigContext.from_dict(config_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


