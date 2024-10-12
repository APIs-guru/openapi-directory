# StepRoute

route leading to the stop

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distance** | **int** | route distance in meters | [optional] 
**duration** | **int** | route duration in seconds | [optional] 
**mode** | **str** | travel mode | [optional] 
**polyline** | **str** | route path compatible with Google polyline encoding algorithm | [optional] 

## Example

```python
from openapi_client.models.step_route import StepRoute

# TODO update the JSON string below
json = "{}"
# create an instance of StepRoute from a JSON string
step_route_instance = StepRoute.from_json(json)
# print the JSON string representation of the object
print(StepRoute.to_json())

# convert the object into a dict
step_route_dict = step_route_instance.to_dict()
# create an instance of StepRoute from a dict
step_route_from_dict = StepRoute.from_dict(step_route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


