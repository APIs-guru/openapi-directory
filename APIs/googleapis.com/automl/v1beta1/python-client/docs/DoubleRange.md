# DoubleRange

A range between two double numbers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **float** | End of the range, exclusive. | [optional] 
**start** | **float** | Start of the range, inclusive. | [optional] 

## Example

```python
from openapi_client.models.double_range import DoubleRange

# TODO update the JSON string below
json = "{}"
# create an instance of DoubleRange from a JSON string
double_range_instance = DoubleRange.from_json(json)
# print the JSON string representation of the object
print(DoubleRange.to_json())

# convert the object into a dict
double_range_dict = double_range_instance.to_dict()
# create an instance of DoubleRange from a dict
double_range_from_dict = DoubleRange.from_dict(double_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


