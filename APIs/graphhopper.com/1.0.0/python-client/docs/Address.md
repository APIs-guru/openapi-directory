# Address


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**curbside** | **str** | Optional parameter. Specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. Only supported for motor vehicles and OpenStreetMap. | [optional] [default to 'any']
**lat** | **float** | Latitude of location. | 
**location_id** | **str** | Specifies the id of the location. | 
**lon** | **float** | Longitude of location. | 
**name** | **str** | Name of location. | [optional] 
**street_hint** | **str** | Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up. | [optional] 

## Example

```python
from openapi_client.models.address import Address

# TODO update the JSON string below
json = "{}"
# create an instance of Address from a JSON string
address_instance = Address.from_json(json)
# print the JSON string representation of the object
print(Address.to_json())

# convert the object into a dict
address_dict = address_instance.to_dict()
# create an instance of Address from a dict
address_from_dict = Address.from_dict(address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


