# XPSTrainingObjectivePoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time at which this point was recorded. | [optional] 
**value** | **float** | The objective value when this point was recorded. | [optional] 

## Example

```python
from openapi_client.models.xps_training_objective_point import XPSTrainingObjectivePoint

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTrainingObjectivePoint from a JSON string
xps_training_objective_point_instance = XPSTrainingObjectivePoint.from_json(json)
# print the JSON string representation of the object
print(XPSTrainingObjectivePoint.to_json())

# convert the object into a dict
xps_training_objective_point_dict = xps_training_objective_point_instance.to_dict()
# create an instance of XPSTrainingObjectivePoint from a dict
xps_training_objective_point_from_dict = XPSTrainingObjectivePoint.from_dict(xps_training_objective_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


