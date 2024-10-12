# ValueDescriptor

A descriptor for the value columns in a data point.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The value key. | [optional] 
**metric_kind** | **str** | The value stream kind. | [optional] 
**unit** | **str** | The unit in which time_series point values are reported. unit follows the UCUM format for units as seen in https://unitsofmeasure.org/ucum.html. unit is only valid if value_type is INTEGER, DOUBLE, DISTRIBUTION. | [optional] 
**value_type** | **str** | The value type. | [optional] 

## Example

```python
from openapi_client.models.value_descriptor import ValueDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of ValueDescriptor from a JSON string
value_descriptor_instance = ValueDescriptor.from_json(json)
# print the JSON string representation of the object
print(ValueDescriptor.to_json())

# convert the object into a dict
value_descriptor_dict = value_descriptor_instance.to_dict()
# create an instance of ValueDescriptor from a dict
value_descriptor_from_dict = ValueDescriptor.from_dict(value_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


