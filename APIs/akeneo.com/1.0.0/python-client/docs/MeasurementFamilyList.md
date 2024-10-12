# MeasurementFamilyList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Measurement family code | 
**labels** | [**MeasurementFamiliesGetList200ResponseLabels**](MeasurementFamiliesGetList200ResponseLabels.md) |  | [optional] 
**standard_unit_code** | **str** | Unit code used as the standard unit for this measurement family | 
**units** | [**MeasurementFamiliesGetList200ResponseUnits**](MeasurementFamiliesGetList200ResponseUnits.md) |  | 

## Example

```python
from openapi_client.models.measurement_family_list import MeasurementFamilyList

# TODO update the JSON string below
json = "{}"
# create an instance of MeasurementFamilyList from a JSON string
measurement_family_list_instance = MeasurementFamilyList.from_json(json)
# print the JSON string representation of the object
print(MeasurementFamilyList.to_json())

# convert the object into a dict
measurement_family_list_dict = measurement_family_list_instance.to_dict()
# create an instance of MeasurementFamilyList from a dict
measurement_family_list_from_dict = MeasurementFamilyList.from_dict(measurement_family_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


