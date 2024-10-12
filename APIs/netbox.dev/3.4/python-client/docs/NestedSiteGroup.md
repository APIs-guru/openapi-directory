# NestedSiteGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**site_count** | **int** |  | [optional] [readonly] 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_site_group import NestedSiteGroup

# TODO update the JSON string below
json = "{}"
# create an instance of NestedSiteGroup from a JSON string
nested_site_group_instance = NestedSiteGroup.from_json(json)
# print the JSON string representation of the object
print(NestedSiteGroup.to_json())

# convert the object into a dict
nested_site_group_dict = nested_site_group_instance.to_dict()
# create an instance of NestedSiteGroup from a dict
nested_site_group_from_dict = NestedSiteGroup.from_dict(nested_site_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


