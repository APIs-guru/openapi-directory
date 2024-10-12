# SiteGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | **int** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**parent** | [**NestedSiteGroup**](NestedSiteGroup.md) |  | [optional] 
**site_count** | **int** |  | [optional] [readonly] 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.site_group import SiteGroup

# TODO update the JSON string below
json = "{}"
# create an instance of SiteGroup from a JSON string
site_group_instance = SiteGroup.from_json(json)
# print the JSON string representation of the object
print(SiteGroup.to_json())

# convert the object into a dict
site_group_dict = site_group_instance.to_dict()
# create an instance of SiteGroup from a dict
site_group_from_dict = SiteGroup.from_dict(site_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


