# DeleteDimensionGroupRequest

Deletes a group over the specified range by decrementing the depth of the dimensions in the range. For example, assume the sheet has a depth-1 group over B:E and a depth-2 group over C:D. Deleting a group over D:E leaves the sheet with a depth-1 group over B:D and a depth-2 group over C:C.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | [**DimensionRange**](DimensionRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.delete_dimension_group_request import DeleteDimensionGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteDimensionGroupRequest from a JSON string
delete_dimension_group_request_instance = DeleteDimensionGroupRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteDimensionGroupRequest.to_json())

# convert the object into a dict
delete_dimension_group_request_dict = delete_dimension_group_request_instance.to_dict()
# create an instance of DeleteDimensionGroupRequest from a dict
delete_dimension_group_request_from_dict = DeleteDimensionGroupRequest.from_dict(delete_dimension_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


