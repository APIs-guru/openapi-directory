# AerodromesByDistance

Geometry-defining arguments for point/distance requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distance** | [**Distance**](Distance.md) |  | 
**latitude** | [**Latitude**](Latitude.md) |  | 
**longitude** | [**Longitude**](Longitude.md) |  | 

## Example

```python
from openapi_client.models.aerodromes_by_distance import AerodromesByDistance

# TODO update the JSON string below
json = "{}"
# create an instance of AerodromesByDistance from a JSON string
aerodromes_by_distance_instance = AerodromesByDistance.from_json(json)
# print the JSON string representation of the object
print(AerodromesByDistance.to_json())

# convert the object into a dict
aerodromes_by_distance_dict = aerodromes_by_distance_instance.to_dict()
# create an instance of AerodromesByDistance from a dict
aerodromes_by_distance_from_dict = AerodromesByDistance.from_dict(aerodromes_by_distance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


