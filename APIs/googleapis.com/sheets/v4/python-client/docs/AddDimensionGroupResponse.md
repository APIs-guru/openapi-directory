# AddDimensionGroupResponse

The result of adding a group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_groups** | [**List[DimensionGroup]**](DimensionGroup.md) | All groups of a dimension after adding a group to that dimension. | [optional] 

## Example

```python
from openapi_client.models.add_dimension_group_response import AddDimensionGroupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddDimensionGroupResponse from a JSON string
add_dimension_group_response_instance = AddDimensionGroupResponse.from_json(json)
# print the JSON string representation of the object
print(AddDimensionGroupResponse.to_json())

# convert the object into a dict
add_dimension_group_response_dict = add_dimension_group_response_instance.to_dict()
# create an instance of AddDimensionGroupResponse from a dict
add_dimension_group_response_from_dict = AddDimensionGroupResponse.from_dict(add_dimension_group_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


