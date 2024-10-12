# TargetLocation

The type that defines the fields for the distance between the item location and the buyer's location. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit_of_measure** | **str** | This value shows the unit of measurement used to measure the distance between the location of the item and the buyer&#39;s location. This value is typically mi or km. | [optional] 
**value** | **str** | This value indicates the distance (measured in the measurement unit in the unitOfMeasure field) between the item location and the buyer&#39;s location. | [optional] 

## Example

```python
from openapi_client.models.target_location import TargetLocation

# TODO update the JSON string below
json = "{}"
# create an instance of TargetLocation from a JSON string
target_location_instance = TargetLocation.from_json(json)
# print the JSON string representation of the object
print(TargetLocation.to_json())

# convert the object into a dict
target_location_dict = target_location_instance.to_dict()
# create an instance of TargetLocation from a dict
target_location_from_dict = TargetLocation.from_dict(target_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


