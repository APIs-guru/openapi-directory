# SourceNumericFilter

Filter for fixed point number data types such as NUMERIC/NUMBER

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numeric_filter_option** | **str** | Required. Enum to set the option defining the datatypes numeric filter has to be applied to | [optional] 
**source_max_precision_filter** | **int** | Optional. The filter will match columns with precision smaller than or equal to this number. | [optional] 
**source_max_scale_filter** | **int** | Optional. The filter will match columns with scale smaller than or equal to this number. | [optional] 
**source_min_precision_filter** | **int** | Optional. The filter will match columns with precision greater than or equal to this number. | [optional] 
**source_min_scale_filter** | **int** | Optional. The filter will match columns with scale greater than or equal to this number. | [optional] 

## Example

```python
from openapi_client.models.source_numeric_filter import SourceNumericFilter

# TODO update the JSON string below
json = "{}"
# create an instance of SourceNumericFilter from a JSON string
source_numeric_filter_instance = SourceNumericFilter.from_json(json)
# print the JSON string representation of the object
print(SourceNumericFilter.to_json())

# convert the object into a dict
source_numeric_filter_dict = source_numeric_filter_instance.to_dict()
# create an instance of SourceNumericFilter from a dict
source_numeric_filter_from_dict = SourceNumericFilter.from_dict(source_numeric_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


