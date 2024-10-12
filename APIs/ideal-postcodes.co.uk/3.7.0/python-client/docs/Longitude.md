# Longitude

The longitude of the postcode (WGS84/ETRS89).  Can be a positive or negative decimal. E.g. -0.1283983  Returns an empty string if no location data is available. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.longitude import Longitude

# TODO update the JSON string below
json = "{}"
# create an instance of Longitude from a JSON string
longitude_instance = Longitude.from_json(json)
# print the JSON string representation of the object
print(Longitude.to_json())

# convert the object into a dict
longitude_dict = longitude_instance.to_dict()
# create an instance of Longitude from a dict
longitude_from_dict = Longitude.from_dict(longitude_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


