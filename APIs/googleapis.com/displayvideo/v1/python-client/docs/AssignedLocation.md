# AssignedLocation

An assignment between a location list and a relevant targeting option.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_location_id** | **str** | Output only. The unique ID of the assigned location. The ID is only unique within a location list. It may be reused in other contexts. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the assigned location. | [optional] [readonly] 
**targeting_option_id** | **str** | Required. The ID of the targeting option assigned to the location list. | [optional] 

## Example

```python
from openapi_client.models.assigned_location import AssignedLocation

# TODO update the JSON string below
json = "{}"
# create an instance of AssignedLocation from a JSON string
assigned_location_instance = AssignedLocation.from_json(json)
# print the JSON string representation of the object
print(AssignedLocation.to_json())

# convert the object into a dict
assigned_location_dict = assigned_location_instance.to_dict()
# create an instance of AssignedLocation from a dict
assigned_location_from_dict = AssignedLocation.from_dict(assigned_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


