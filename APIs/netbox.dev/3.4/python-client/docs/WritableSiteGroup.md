# WritableSiteGroup


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
**parent** | **int** |  | [optional] 
**site_count** | **int** |  | [optional] [readonly] 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_site_group import WritableSiteGroup

# TODO update the JSON string below
json = "{}"
# create an instance of WritableSiteGroup from a JSON string
writable_site_group_instance = WritableSiteGroup.from_json(json)
# print the JSON string representation of the object
print(WritableSiteGroup.to_json())

# convert the object into a dict
writable_site_group_dict = writable_site_group_instance.to_dict()
# create an instance of WritableSiteGroup from a dict
writable_site_group_from_dict = WritableSiteGroup.from_dict(writable_site_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


