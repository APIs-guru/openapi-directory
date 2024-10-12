# GroupRegion

Provides information about an area within a country that a group is associated with (eg. a state in the US or a province in Canada).  May be null.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abbreviation** | **str** | A 2 letter abbreviation for the region (is not guaranteed to be globally unique but is unique among all the regions in the country). | [optional] 
**name** | **str** | The name of the region. | [optional] 

## Example

```python
from openapi_client.models.group_region import GroupRegion

# TODO update the JSON string below
json = "{}"
# create an instance of GroupRegion from a JSON string
group_region_instance = GroupRegion.from_json(json)
# print the JSON string representation of the object
print(GroupRegion.to_json())

# convert the object into a dict
group_region_dict = group_region_instance.to_dict()
# create an instance of GroupRegion from a dict
group_region_from_dict = GroupRegion.from_dict(group_region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


