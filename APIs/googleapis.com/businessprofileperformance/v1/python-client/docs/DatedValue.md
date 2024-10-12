# DatedValue

Represents a single datapoint in the timeseries, where each datapoint is a date-value pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**value** | **str** | The value of the datapoint. This will not be present when the value is zero. | [optional] 

## Example

```python
from openapi_client.models.dated_value import DatedValue

# TODO update the JSON string below
json = "{}"
# create an instance of DatedValue from a JSON string
dated_value_instance = DatedValue.from_json(json)
# print the JSON string representation of the object
print(DatedValue.to_json())

# convert the object into a dict
dated_value_dict = dated_value_instance.to_dict()
# create an instance of DatedValue from a dict
dated_value_from_dict = DatedValue.from_dict(dated_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


