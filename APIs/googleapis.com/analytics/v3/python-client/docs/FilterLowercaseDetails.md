# FilterLowercaseDetails

Details for the filter of the type LOWER.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | **str** | Field to use in the filter. | [optional] 
**field_index** | **int** | The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. | [optional] 

## Example

```python
from openapi_client.models.filter_lowercase_details import FilterLowercaseDetails

# TODO update the JSON string below
json = "{}"
# create an instance of FilterLowercaseDetails from a JSON string
filter_lowercase_details_instance = FilterLowercaseDetails.from_json(json)
# print the JSON string representation of the object
print(FilterLowercaseDetails.to_json())

# convert the object into a dict
filter_lowercase_details_dict = filter_lowercase_details_instance.to_dict()
# create an instance of FilterLowercaseDetails from a dict
filter_lowercase_details_from_dict = FilterLowercaseDetails.from_dict(filter_lowercase_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


