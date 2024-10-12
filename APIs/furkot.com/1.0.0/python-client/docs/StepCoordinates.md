# StepCoordinates

geographical coordinates of the stop

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lat** | **float** | latitude | [optional] 
**lon** | **float** | longitude | [optional] 

## Example

```python
from openapi_client.models.step_coordinates import StepCoordinates

# TODO update the JSON string below
json = "{}"
# create an instance of StepCoordinates from a JSON string
step_coordinates_instance = StepCoordinates.from_json(json)
# print the JSON string representation of the object
print(StepCoordinates.to_json())

# convert the object into a dict
step_coordinates_dict = step_coordinates_instance.to_dict()
# create an instance of StepCoordinates from a dict
step_coordinates_from_dict = StepCoordinates.from_dict(step_coordinates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


