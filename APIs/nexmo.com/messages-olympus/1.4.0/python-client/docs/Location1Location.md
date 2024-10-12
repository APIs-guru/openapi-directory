# Location1Location


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address of the location. Only displayed if &#x60;name&#x60; is present. | [optional] 
**lat** | **float** | Latitude of the location. | 
**long** | **float** | Longitude of the location. | 
**name** | **str** | Name of the location. | [optional] 

## Example

```python
from openapi_client.models.location1_location import Location1Location

# TODO update the JSON string below
json = "{}"
# create an instance of Location1Location from a JSON string
location1_location_instance = Location1Location.from_json(json)
# print the JSON string representation of the object
print(Location1Location.to_json())

# convert the object into a dict
location1_location_dict = location1_location_instance.to_dict()
# create an instance of Location1Location from a dict
location1_location_from_dict = Location1Location.from_dict(location1_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


