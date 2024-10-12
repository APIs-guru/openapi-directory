# Location

Location returns the location name, and if the location is recommended for GKE cluster scheduling.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Contains the name of the resource requested. Specified in the format &#x60;projects/*/locations/*&#x60;. | [optional] 
**recommended** | **bool** | Whether the location is recommended for GKE cluster scheduling. | [optional] 
**type** | **str** | Contains the type of location this Location is for. Regional or Zonal. | [optional] 

## Example

```python
from openapi_client.models.location import Location

# TODO update the JSON string below
json = "{}"
# create an instance of Location from a JSON string
location_instance = Location.from_json(json)
# print the JSON string representation of the object
print(Location.to_json())

# convert the object into a dict
location_dict = location_instance.to_dict()
# create an instance of Location from a dict
location_from_dict = Location.from_dict(location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


