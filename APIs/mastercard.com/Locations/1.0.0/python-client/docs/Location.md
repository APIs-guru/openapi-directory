# Location


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**distance** | **float** | This is the numerical value for the distance from the provided location to the selected ATM. | [optional] 
**distance_unit** | **str** | This is the unit of measure value for the distance from the provided location to the selected ATM. Options are KILOMETER and MILE. | [optional] 
**location_type** | [**LocationType**](LocationType.md) |  | [optional] 
**name** | **str** | This is the name of the ATM location | [optional] 
**point** | [**Point**](Point.md) |  | [optional] 

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


