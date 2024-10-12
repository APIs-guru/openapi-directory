# NOTAMsByDistance

Geometry-defining arguments for point/distance requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distance** | [**Distance**](Distance.md) |  | 
**latitude** | [**Latitude**](Latitude.md) |  | 
**longitude** | [**Longitude**](Longitude.md) |  | 

## Example

```python
from openapi_client.models.notams_by_distance import NOTAMsByDistance

# TODO update the JSON string below
json = "{}"
# create an instance of NOTAMsByDistance from a JSON string
notams_by_distance_instance = NOTAMsByDistance.from_json(json)
# print the JSON string representation of the object
print(NOTAMsByDistance.to_json())

# convert the object into a dict
notams_by_distance_dict = notams_by_distance_instance.to_dict()
# create an instance of NOTAMsByDistance from a dict
notams_by_distance_from_dict = NOTAMsByDistance.from_dict(notams_by_distance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


