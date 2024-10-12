# MeasurementFamiliesGetList200ResponseUnitsUnitCode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Measurement unit code. More details &lt;a href&#x3D;&#39;/concepts/target-market-settings.html#focus-on-the-units&#39;&gt;here&lt;/a&gt;. | [optional] 
**convert_from_standard** | [**List[MeasurementFamiliesGetList200ResponseUnitsUnitCodeConvertFromStandardInner]**](MeasurementFamiliesGetList200ResponseUnitsUnitCodeConvertFromStandardInner.md) | Calculation to convert the unit from the standard unit. More details &lt;a href&#x3D;&#39;/concepts/target-market-settings.html#focus-on-the-units&#39;&gt;here&lt;/a&gt;. | [optional] 
**labels** | [**MeasurementFamiliesGetList200ResponseUnitsUnitCodeLabels**](MeasurementFamiliesGetList200ResponseUnitsUnitCodeLabels.md) |  | [optional] 
**symbol** | **str** | Measurement unit symbol. More details &lt;a href&#x3D;&#39;/concepts/target-market-settings.html#focus-on-the-units&#39;&gt;here&lt;/a&gt;. | [optional] 

## Example

```python
from openapi_client.models.measurement_families_get_list200_response_units_unit_code import MeasurementFamiliesGetList200ResponseUnitsUnitCode

# TODO update the JSON string below
json = "{}"
# create an instance of MeasurementFamiliesGetList200ResponseUnitsUnitCode from a JSON string
measurement_families_get_list200_response_units_unit_code_instance = MeasurementFamiliesGetList200ResponseUnitsUnitCode.from_json(json)
# print the JSON string representation of the object
print(MeasurementFamiliesGetList200ResponseUnitsUnitCode.to_json())

# convert the object into a dict
measurement_families_get_list200_response_units_unit_code_dict = measurement_families_get_list200_response_units_unit_code_instance.to_dict()
# create an instance of MeasurementFamiliesGetList200ResponseUnitsUnitCode from a dict
measurement_families_get_list200_response_units_unit_code_from_dict = MeasurementFamiliesGetList200ResponseUnitsUnitCode.from_dict(measurement_families_get_list200_response_units_unit_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


