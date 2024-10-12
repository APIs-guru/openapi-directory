# IntegerGauge

A metric value representing temporal values of a variable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **str** | The time at which this value was measured. Measured as msecs from epoch. | [optional] 
**value** | [**SplitInt64**](SplitInt64.md) |  | [optional] 

## Example

```python
from openapi_client.models.integer_gauge import IntegerGauge

# TODO update the JSON string below
json = "{}"
# create an instance of IntegerGauge from a JSON string
integer_gauge_instance = IntegerGauge.from_json(json)
# print the JSON string representation of the object
print(IntegerGauge.to_json())

# convert the object into a dict
integer_gauge_dict = integer_gauge_instance.to_dict()
# create an instance of IntegerGauge from a dict
integer_gauge_from_dict = IntegerGauge.from_dict(integer_gauge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


