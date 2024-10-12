# FilterAdvancedDetails

Details for the filter of the type ADVANCED.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_sensitive** | **bool** | Indicates if the filter expressions are case sensitive. | [optional] 
**extract_a** | **str** | Expression to extract from field A. | [optional] 
**extract_b** | **str** | Expression to extract from field B. | [optional] 
**field_a** | **str** | Field A. | [optional] 
**field_a_index** | **int** | The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. | [optional] 
**field_a_required** | **bool** | Indicates if field A is required to match. | [optional] 
**field_b** | **str** | Field B. | [optional] 
**field_b_index** | **int** | The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. | [optional] 
**field_b_required** | **bool** | Indicates if field B is required to match. | [optional] 
**output_constructor** | **str** | Expression used to construct the output value. | [optional] 
**output_to_field** | **str** | Output field. | [optional] 
**output_to_field_index** | **int** | The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. | [optional] 
**override_output_field** | **bool** | Indicates if the existing value of the output field, if any, should be overridden by the output expression. | [optional] 

## Example

```python
from openapi_client.models.filter_advanced_details import FilterAdvancedDetails

# TODO update the JSON string below
json = "{}"
# create an instance of FilterAdvancedDetails from a JSON string
filter_advanced_details_instance = FilterAdvancedDetails.from_json(json)
# print the JSON string representation of the object
print(FilterAdvancedDetails.to_json())

# convert the object into a dict
filter_advanced_details_dict = filter_advanced_details_instance.to_dict()
# create an instance of FilterAdvancedDetails from a dict
filter_advanced_details_from_dict = FilterAdvancedDetails.from_dict(filter_advanced_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


