# Location

A person's location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**building_id** | **str** | The building identifier. | [optional] 
**current** | **bool** | Whether the location is the current location. | [optional] 
**desk_code** | **str** | The individual desk location. | [optional] 
**floor** | **str** | The floor name or number. | [optional] 
**floor_section** | **str** | The floor section in &#x60;floor_name&#x60;. | [optional] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**type** | **str** | The type of the location. The type can be custom or one of these predefined values: * &#x60;desk&#x60; * &#x60;grewUp&#x60; | [optional] 
**value** | **str** | The free-form value of the location. | [optional] 

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


