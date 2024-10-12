# UpdateDimensionGroupRequest

Updates the state of the specified group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_group** | [**DimensionGroup**](DimensionGroup.md) |  | [optional] 
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;dimensionGroup&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. | [optional] 

## Example

```python
from openapi_client.models.update_dimension_group_request import UpdateDimensionGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDimensionGroupRequest from a JSON string
update_dimension_group_request_instance = UpdateDimensionGroupRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDimensionGroupRequest.to_json())

# convert the object into a dict
update_dimension_group_request_dict = update_dimension_group_request_instance.to_dict()
# create an instance of UpdateDimensionGroupRequest from a dict
update_dimension_group_request_from_dict = UpdateDimensionGroupRequest.from_dict(update_dimension_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


