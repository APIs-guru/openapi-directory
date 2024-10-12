# Location

Output only. A resource that represents a location with full geographic information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lat_lng** | [**LatLng**](LatLng.md) |  | [optional] 
**location_type** | **str** | The type of a location, which corresponds to the address lines field of PostalAddress. For example, \&quot;Downtown, Atlanta, GA, USA\&quot; has a type of LocationType#NEIGHBORHOOD, and \&quot;Kansas City, KS, USA\&quot; has a type of LocationType#LOCALITY. | [optional] 
**postal_address** | [**PostalAddress**](PostalAddress.md) |  | [optional] 
**radius_in_miles** | **float** | Radius in miles of the job location. This value is derived from the location bounding box in which a circle with the specified radius centered from LatLng covers the area associated with the job location. For example, currently, \&quot;Mountain View, CA, USA\&quot; has a radius of 6.17 miles. | [optional] 

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


