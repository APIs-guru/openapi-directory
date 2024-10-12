# DataFilterValueRange

A range of values whose location is specified by a DataFilter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_filter** | [**DataFilter**](DataFilter.md) |  | [optional] 
**major_dimension** | **str** | The major dimension of the values. | [optional] 
**values** | **List[List[object]]** | The data to be written. If the provided values exceed any of the ranges matched by the data filter then the request fails. If the provided values are less than the matched ranges only the specified values are written, existing values in the matched ranges remain unaffected. | [optional] 

## Example

```python
from openapi_client.models.data_filter_value_range import DataFilterValueRange

# TODO update the JSON string below
json = "{}"
# create an instance of DataFilterValueRange from a JSON string
data_filter_value_range_instance = DataFilterValueRange.from_json(json)
# print the JSON string representation of the object
print(DataFilterValueRange.to_json())

# convert the object into a dict
data_filter_value_range_dict = data_filter_value_range_instance.to_dict()
# create an instance of DataFilterValueRange from a dict
data_filter_value_range_from_dict = DataFilterValueRange.from_dict(data_filter_value_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


