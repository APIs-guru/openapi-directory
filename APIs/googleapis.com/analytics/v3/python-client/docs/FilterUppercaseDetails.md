# FilterUppercaseDetails

Details for the filter of the type UPPER.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | **str** | Field to use in the filter. | [optional] 
**field_index** | **int** | The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. | [optional] 

## Example

```python
from openapi_client.models.filter_uppercase_details import FilterUppercaseDetails

# TODO update the JSON string below
json = "{}"
# create an instance of FilterUppercaseDetails from a JSON string
filter_uppercase_details_instance = FilterUppercaseDetails.from_json(json)
# print the JSON string representation of the object
print(FilterUppercaseDetails.to_json())

# convert the object into a dict
filter_uppercase_details_dict = filter_uppercase_details_instance.to_dict()
# create an instance of FilterUppercaseDetails from a dict
filter_uppercase_details_from_dict = FilterUppercaseDetails.from_dict(filter_uppercase_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


