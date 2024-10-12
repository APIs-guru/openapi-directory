# AddDimensionGroupRequest

Creates a group over the specified range. If the requested range is a superset of the range of an existing group G, then the depth of G is incremented and this new group G' has the depth of that group. For example, a group [C:D, depth 1] + [B:E] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range is a subset of the range of an existing group G, then the depth of the new group G' becomes one greater than the depth of G. For example, a group [B:E, depth 1] + [C:D] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range starts before and ends within, or starts within and ends after, the range of an existing group G, then the range of the existing group G becomes the union of the ranges, and the new group G' has depth one greater than the depth of G and range as the intersection of the ranges. For example, a group [B:D, depth 1] + [C:E] results in groups [B:E, depth 1] and [C:D, depth 2].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | [**DimensionRange**](DimensionRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_dimension_group_request import AddDimensionGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddDimensionGroupRequest from a JSON string
add_dimension_group_request_instance = AddDimensionGroupRequest.from_json(json)
# print the JSON string representation of the object
print(AddDimensionGroupRequest.to_json())

# convert the object into a dict
add_dimension_group_request_dict = add_dimension_group_request_instance.to_dict()
# create an instance of AddDimensionGroupRequest from a dict
add_dimension_group_request_from_dict = AddDimensionGroupRequest.from_dict(add_dimension_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


