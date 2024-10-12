# MeasurementFamiliesGetList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Measurement family code | 
**labels** | [**MeasurementFamiliesGetList200ResponseLabels**](MeasurementFamiliesGetList200ResponseLabels.md) |  | [optional] 
**standard_unit_code** | **str** | Unit code used as the standard unit for this measurement family | 
**units** | [**MeasurementFamiliesGetList200ResponseUnits**](MeasurementFamiliesGetList200ResponseUnits.md) |  | 

## Example

```python
from openapi_client.models.measurement_families_get_list200_response import MeasurementFamiliesGetList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of MeasurementFamiliesGetList200Response from a JSON string
measurement_families_get_list200_response_instance = MeasurementFamiliesGetList200Response.from_json(json)
# print the JSON string representation of the object
print(MeasurementFamiliesGetList200Response.to_json())

# convert the object into a dict
measurement_families_get_list200_response_dict = measurement_families_get_list200_response_instance.to_dict()
# create an instance of MeasurementFamiliesGetList200Response from a dict
measurement_families_get_list200_response_from_dict = MeasurementFamiliesGetList200Response.from_dict(measurement_families_get_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


