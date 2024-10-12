# Location

The location the goods/services were delivered to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**building_number** | **str** | The building number. Used in SA. | [optional] 
**city** | **str** | Address city. | [optional] 
**country** | **str** | Address country. | [optional] 
**county** | **str** | Address county. | [optional] 
**department** | **str** | Department name. | [optional] 
**id** | **str** | The id of the location. | [optional] 
**line1** | **str** | Address line 1. | [optional] 
**line2** | **str** | Address line 2. | [optional] 
**neighborhood** | **str** | The neighborhood. Used in SA. | [optional] 
**scheme_id** | **str** | The scheme id for the id of the location. | [optional] 
**secondary_number** | **str** | The secondary number. Used in SA. | [optional] 
**zip** | **str** | Address zip code | [optional] 

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


