# SSAByDistance

Geometry-defining arguments for point/distance requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distance** | [**Distance**](Distance.md) |  | 
**latitude** | [**Latitude**](Latitude.md) |  | 
**longitude** | [**Longitude**](Longitude.md) |  | 

## Example

```python
from openapi_client.models.ssaby_distance import SSAByDistance

# TODO update the JSON string below
json = "{}"
# create an instance of SSAByDistance from a JSON string
ssaby_distance_instance = SSAByDistance.from_json(json)
# print the JSON string representation of the object
print(SSAByDistance.to_json())

# convert the object into a dict
ssaby_distance_dict = ssaby_distance_instance.to_dict()
# create an instance of SSAByDistance from a dict
ssaby_distance_from_dict = SSAByDistance.from_dict(ssaby_distance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


