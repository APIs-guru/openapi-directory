# AirspaceByDistance

Geometry-defining arguments for point/distance requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asptypes** | **List[str]** |  | 
**distance** | [**Distance**](Distance.md) |  | 
**latitude** | [**Latitude**](Latitude.md) |  | 
**longitude** | [**Longitude**](Longitude.md) |  | 

## Example

```python
from openapi_client.models.airspace_by_distance import AirspaceByDistance

# TODO update the JSON string below
json = "{}"
# create an instance of AirspaceByDistance from a JSON string
airspace_by_distance_instance = AirspaceByDistance.from_json(json)
# print the JSON string representation of the object
print(AirspaceByDistance.to_json())

# convert the object into a dict
airspace_by_distance_dict = airspace_by_distance_instance.to_dict()
# create an instance of AirspaceByDistance from a dict
airspace_by_distance_from_dict = AirspaceByDistance.from_dict(airspace_by_distance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


