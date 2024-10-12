# LocationType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airport_code** | **str** | Airport code is a 3 digit field. This is an optional field and will only be returned if Atms.Atm.Location.LocationType.Type&#x3D;AIRPORT | [optional] 
**type** | **str** | Type of location for the ATM. Options are OTHER, AIRPORT, HOSPITAL, FINANCIAL_INSTITUTION. | [optional] 

## Example

```python
from openapi_client.models.location_type import LocationType

# TODO update the JSON string below
json = "{}"
# create an instance of LocationType from a JSON string
location_type_instance = LocationType.from_json(json)
# print the JSON string representation of the object
print(LocationType.to_json())

# convert the object into a dict
location_type_dict = location_type_instance.to_dict()
# create an instance of LocationType from a dict
location_type_from_dict = LocationType.from_dict(location_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


