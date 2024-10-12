# PlacementAssignment

Placement Assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Whether this placement assignment is active. When true, the placement will be included in the ad&#39;s rotation. | [optional] 
**placement_id** | **str** | ID of the placement to be assigned. This is a required field. | [optional] 
**placement_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**ssl_required** | **bool** | Whether the placement to be assigned requires SSL. This is a read-only field that is auto-generated when the ad is inserted or updated. | [optional] 

## Example

```python
from openapi_client.models.placement_assignment import PlacementAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of PlacementAssignment from a JSON string
placement_assignment_instance = PlacementAssignment.from_json(json)
# print the JSON string representation of the object
print(PlacementAssignment.to_json())

# convert the object into a dict
placement_assignment_dict = placement_assignment_instance.to_dict()
# create an instance of PlacementAssignment from a dict
placement_assignment_from_dict = PlacementAssignment.from_dict(placement_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


