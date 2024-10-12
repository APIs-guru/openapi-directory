# AirspaceByRoute

Geometry-defining arguments for along-route requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asptypes** | **List[str]** |  | 
**route** | **object** |  | 

## Example

```python
from openapi_client.models.airspace_by_route import AirspaceByRoute

# TODO update the JSON string below
json = "{}"
# create an instance of AirspaceByRoute from a JSON string
airspace_by_route_instance = AirspaceByRoute.from_json(json)
# print the JSON string representation of the object
print(AirspaceByRoute.to_json())

# convert the object into a dict
airspace_by_route_dict = airspace_by_route_instance.to_dict()
# create an instance of AirspaceByRoute from a dict
airspace_by_route_from_dict = AirspaceByRoute.from_dict(airspace_by_route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


