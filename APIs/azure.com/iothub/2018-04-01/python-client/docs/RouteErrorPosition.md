# RouteErrorPosition

Position where the route error happened

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **int** | Column where the route error happened | [optional] 
**line** | **int** | Line where the route error happened | [optional] 

## Example

```python
from openapi_client.models.route_error_position import RouteErrorPosition

# TODO update the JSON string below
json = "{}"
# create an instance of RouteErrorPosition from a JSON string
route_error_position_instance = RouteErrorPosition.from_json(json)
# print the JSON string representation of the object
print(RouteErrorPosition.to_json())

# convert the object into a dict
route_error_position_dict = route_error_position_instance.to_dict()
# create an instance of RouteErrorPosition from a dict
route_error_position_from_dict = RouteErrorPosition.from_dict(route_error_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


