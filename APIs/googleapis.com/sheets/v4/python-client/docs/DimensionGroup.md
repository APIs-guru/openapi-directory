# DimensionGroup

A group over an interval of rows or columns on a sheet, which can contain or be contained within other groups. A group can be collapsed or expanded as a unit on the sheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collapsed** | **bool** | This field is true if this group is collapsed. A collapsed group remains collapsed if an overlapping group at a shallower depth is expanded. A true value does not imply that all dimensions within the group are hidden, since a dimension&#39;s visibility can change independently from this group property. However, when this property is updated, all dimensions within it are set to hidden if this field is true, or set to visible if this field is false. | [optional] 
**depth** | **int** | The depth of the group, representing how many groups have a range that wholly contains the range of this group. | [optional] 
**range** | [**DimensionRange**](DimensionRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.dimension_group import DimensionGroup

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionGroup from a JSON string
dimension_group_instance = DimensionGroup.from_json(json)
# print the JSON string representation of the object
print(DimensionGroup.to_json())

# convert the object into a dict
dimension_group_dict = dimension_group_instance.to_dict()
# create an instance of DimensionGroup from a dict
dimension_group_from_dict = DimensionGroup.from_dict(dimension_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


