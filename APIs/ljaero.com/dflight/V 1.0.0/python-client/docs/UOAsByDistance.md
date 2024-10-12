# UOAsByDistance

Geometry-defining arguments for point/distance requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distance** | [**Distance**](Distance.md) |  | 
**latitude** | [**Latitude**](Latitude.md) |  | 
**longitude** | [**Longitude**](Longitude.md) |  | 

## Example

```python
from openapi_client.models.uoas_by_distance import UOAsByDistance

# TODO update the JSON string below
json = "{}"
# create an instance of UOAsByDistance from a JSON string
uoas_by_distance_instance = UOAsByDistance.from_json(json)
# print the JSON string representation of the object
print(UOAsByDistance.to_json())

# convert the object into a dict
uoas_by_distance_dict = uoas_by_distance_instance.to_dict()
# create an instance of UOAsByDistance from a dict
uoas_by_distance_from_dict = UOAsByDistance.from_dict(uoas_by_distance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


