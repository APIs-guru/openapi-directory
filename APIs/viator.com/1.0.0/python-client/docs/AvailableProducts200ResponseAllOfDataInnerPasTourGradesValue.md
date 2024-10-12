# AvailableProducts200ResponseAllOfDataInnerPasTourGradesValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avail_dates** | [**List[AvailableProducts200ResponseAllOfDataInnerPasTourGradesValueAvailDatesInner]**](AvailableProducts200ResponseAllOfDataInnerPasTourGradesValueAvailDatesInner.md) | **array of objects** with availability and pricing information for *this* tour grade | [optional] 
**booking_engine** | **str** | **booking modality specifier** for *this* tour grade | [optional] 
**description** | **str** | **natural-language description** of *this* tour grade | [optional] 
**language_services** | **Dict[str, List[object]]** | **dictionary** of language codes to array of textual language service descriptors available for *this* tour grade | [optional] 
**sapi** | **bool** | ignore (Viator only) | [optional] 
**title** | **str** | **natural-language title** of *this* tour grade | [optional] 
**tour_grade_code** | **str** | **alphanumeric identifier** for *this* tour grade | [optional] 

## Example

```python
from openapi_client.models.available_products200_response_all_of_data_inner_pas_tour_grades_value import AvailableProducts200ResponseAllOfDataInnerPasTourGradesValue

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableProducts200ResponseAllOfDataInnerPasTourGradesValue from a JSON string
available_products200_response_all_of_data_inner_pas_tour_grades_value_instance = AvailableProducts200ResponseAllOfDataInnerPasTourGradesValue.from_json(json)
# print the JSON string representation of the object
print(AvailableProducts200ResponseAllOfDataInnerPasTourGradesValue.to_json())

# convert the object into a dict
available_products200_response_all_of_data_inner_pas_tour_grades_value_dict = available_products200_response_all_of_data_inner_pas_tour_grades_value_instance.to_dict()
# create an instance of AvailableProducts200ResponseAllOfDataInnerPasTourGradesValue from a dict
available_products200_response_all_of_data_inner_pas_tour_grades_value_from_dict = AvailableProducts200ResponseAllOfDataInnerPasTourGradesValue.from_dict(available_products200_response_all_of_data_inner_pas_tour_grades_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


