# ObstaclesByDistance

Geometry-defining arguments for point/distance requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distance** | [**Distance**](Distance.md) |  | 
**latitude** | [**Latitude**](Latitude.md) |  | 
**longitude** | [**Longitude**](Longitude.md) |  | 

## Example

```python
from openapi_client.models.obstacles_by_distance import ObstaclesByDistance

# TODO update the JSON string below
json = "{}"
# create an instance of ObstaclesByDistance from a JSON string
obstacles_by_distance_instance = ObstaclesByDistance.from_json(json)
# print the JSON string representation of the object
print(ObstaclesByDistance.to_json())

# convert the object into a dict
obstacles_by_distance_dict = obstacles_by_distance_instance.to_dict()
# create an instance of ObstaclesByDistance from a dict
obstacles_by_distance_from_dict = ObstaclesByDistance.from_dict(obstacles_by_distance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


