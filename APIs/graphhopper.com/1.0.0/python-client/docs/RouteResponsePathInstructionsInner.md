# RouteResponsePathInstructionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distance** | **float** | The distance for this instruction, in meters.  | [optional] 
**exit_number** | **int** | Only available for roundabout instructions (sign is 6). The count of exits at which the route leaves the roundabout.  | [optional] 
**interval** | **List[int]** | Two indices into &#x60;points&#x60;, referring to the beginning and the end of the segment of the route this instruction refers to.  | [optional] 
**sign** | **int** | A number which specifies the sign to show:  | sign | description  | |---|---| |-98| an U-turn without the knowledge if it is a right or left U-turn | | -8| a left U-turn | | -7| keep left | | -6| **not yet used**: leave roundabout | | -3| turn sharp left | | -2| turn left | | -1| turn slight left | |  0| continue on street | |  1| turn slight right | |  2| turn right | |  3| turn sharp right | |  4| the finish instruction before the last point | |  5| the instruction before a via point | |  6| the instruction before entering a roundabout | |  7| keep right | |  8| a right U-turn | |  *| **For future compatibility** it is important that all clients are able to handle also unknown instruction sign numbers  | [optional] 
**street_name** | **str** | The name of the street to turn onto in order to follow the route.  | [optional] 
**text** | **str** | A description what the user has to do in order to follow the route. The language depends on the locale parameter.  | [optional] 
**time** | **int** | The duration for this instruction, in milliseconds.  | [optional] 
**turn_angle** | **float** | Only available for roundabout instructions (sign is 6). The radian of the route within the roundabout &#x60;0 &lt; r &lt; 2*PI&#x60; for clockwise and &#x60;-2*PI &lt; r &lt; 0&#x60; for counterclockwise turns.  | [optional] 

## Example

```python
from openapi_client.models.route_response_path_instructions_inner import RouteResponsePathInstructionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of RouteResponsePathInstructionsInner from a JSON string
route_response_path_instructions_inner_instance = RouteResponsePathInstructionsInner.from_json(json)
# print the JSON string representation of the object
print(RouteResponsePathInstructionsInner.to_json())

# convert the object into a dict
route_response_path_instructions_inner_dict = route_response_path_instructions_inner_instance.to_dict()
# create an instance of RouteResponsePathInstructionsInner from a dict
route_response_path_instructions_inner_from_dict = RouteResponsePathInstructionsInner.from_dict(route_response_path_instructions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


