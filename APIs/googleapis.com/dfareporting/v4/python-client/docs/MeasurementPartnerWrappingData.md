# MeasurementPartnerWrappingData

Placement tag wrapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link_status** | **str** | Placement wrapping status. | [optional] 
**measurement_partner** | **str** | Measurement partner used for wrapping the placement. | [optional] 
**tag_wrapping_mode** | **str** | Measurement mode for the wrapped placement. | [optional] 
**wrapped_tag** | **str** | Tag provided by the measurement partner during wrapping. | [optional] 

## Example

```python
from openapi_client.models.measurement_partner_wrapping_data import MeasurementPartnerWrappingData

# TODO update the JSON string below
json = "{}"
# create an instance of MeasurementPartnerWrappingData from a JSON string
measurement_partner_wrapping_data_instance = MeasurementPartnerWrappingData.from_json(json)
# print the JSON string representation of the object
print(MeasurementPartnerWrappingData.to_json())

# convert the object into a dict
measurement_partner_wrapping_data_dict = measurement_partner_wrapping_data_instance.to_dict()
# create an instance of MeasurementPartnerWrappingData from a dict
measurement_partner_wrapping_data_from_dict = MeasurementPartnerWrappingData.from_dict(measurement_partner_wrapping_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


