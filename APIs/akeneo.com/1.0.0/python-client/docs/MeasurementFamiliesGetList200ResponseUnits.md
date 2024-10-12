# MeasurementFamiliesGetList200ResponseUnits

Measurement units for this family with their conversion operations. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit_code** | [**MeasurementFamiliesGetList200ResponseUnitsUnitCode**](MeasurementFamiliesGetList200ResponseUnitsUnitCode.md) |  | [optional] 

## Example

```python
from openapi_client.models.measurement_families_get_list200_response_units import MeasurementFamiliesGetList200ResponseUnits

# TODO update the JSON string below
json = "{}"
# create an instance of MeasurementFamiliesGetList200ResponseUnits from a JSON string
measurement_families_get_list200_response_units_instance = MeasurementFamiliesGetList200ResponseUnits.from_json(json)
# print the JSON string representation of the object
print(MeasurementFamiliesGetList200ResponseUnits.to_json())

# convert the object into a dict
measurement_families_get_list200_response_units_dict = measurement_families_get_list200_response_units_instance.to_dict()
# create an instance of MeasurementFamiliesGetList200ResponseUnits from a dict
measurement_families_get_list200_response_units_from_dict = MeasurementFamiliesGetList200ResponseUnits.from_dict(measurement_families_get_list200_response_units_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


