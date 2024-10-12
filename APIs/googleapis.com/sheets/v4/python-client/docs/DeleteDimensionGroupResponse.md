# DeleteDimensionGroupResponse

The result of deleting a group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_groups** | [**List[DimensionGroup]**](DimensionGroup.md) | All groups of a dimension after deleting a group from that dimension. | [optional] 

## Example

```python
from openapi_client.models.delete_dimension_group_response import DeleteDimensionGroupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteDimensionGroupResponse from a JSON string
delete_dimension_group_response_instance = DeleteDimensionGroupResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteDimensionGroupResponse.to_json())

# convert the object into a dict
delete_dimension_group_response_dict = delete_dimension_group_response_instance.to_dict()
# create an instance of DeleteDimensionGroupResponse from a dict
delete_dimension_group_response_from_dict = DeleteDimensionGroupResponse.from_dict(delete_dimension_group_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


