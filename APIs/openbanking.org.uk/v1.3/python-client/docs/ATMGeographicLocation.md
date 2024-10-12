# ATMGeographicLocation

Geographic Coordinates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latitude** | **str** | The Latitude measured in decimal format according to ISO 213 | 
**longitude** | **str** | The longitude measured in decimal format according to ISO 213 | 

## Example

```python
from openapi_client.models.atm_geographic_location import ATMGeographicLocation

# TODO update the JSON string below
json = "{}"
# create an instance of ATMGeographicLocation from a JSON string
atm_geographic_location_instance = ATMGeographicLocation.from_json(json)
# print the JSON string representation of the object
print(ATMGeographicLocation.to_json())

# convert the object into a dict
atm_geographic_location_dict = atm_geographic_location_instance.to_dict()
# create an instance of ATMGeographicLocation from a dict
atm_geographic_location_from_dict = ATMGeographicLocation.from_dict(atm_geographic_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


