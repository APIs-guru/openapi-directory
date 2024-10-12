# RangeValue

Represents the value of a range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | [**QueryParameterValue**](QueryParameterValue.md) |  | [optional] 
**start** | [**QueryParameterValue**](QueryParameterValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.range_value import RangeValue

# TODO update the JSON string below
json = "{}"
# create an instance of RangeValue from a JSON string
range_value_instance = RangeValue.from_json(json)
# print the JSON string representation of the object
print(RangeValue.to_json())

# convert the object into a dict
range_value_dict = range_value_instance.to_dict()
# create an instance of RangeValue from a dict
range_value_from_dict = RangeValue.from_dict(range_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


