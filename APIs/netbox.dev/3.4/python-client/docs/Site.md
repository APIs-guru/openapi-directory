# Site


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asns** | [**List[NestedASN]**](NestedASN.md) |  | [optional] 
**circuit_count** | **int** |  | [optional] [readonly] 
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**facility** | **str** | Local facility ID or description | [optional] 
**group** | [**NestedSiteGroup**](NestedSiteGroup.md) |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**latitude** | **float** | GPS coordinate (latitude) | [optional] 
**longitude** | **float** | GPS coordinate (longitude) | [optional] 
**name** | **str** |  | 
**physical_address** | **str** |  | [optional] 
**prefix_count** | **int** |  | [optional] [readonly] 
**rack_count** | **int** |  | [optional] [readonly] 
**region** | [**NestedRegion**](NestedRegion.md) |  | [optional] 
**shipping_address** | **str** |  | [optional] 
**slug** | **str** |  | 
**status** | [**Status7**](Status7.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | [**NestedTenant**](NestedTenant.md) |  | [optional] 
**time_zone** | **str** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**virtualmachine_count** | **int** |  | [optional] [readonly] 
**vlan_count** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.site import Site

# TODO update the JSON string below
json = "{}"
# create an instance of Site from a JSON string
site_instance = Site.from_json(json)
# print the JSON string representation of the object
print(Site.to_json())

# convert the object into a dict
site_dict = site_instance.to_dict()
# create an instance of Site from a dict
site_from_dict = Site.from_dict(site_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


