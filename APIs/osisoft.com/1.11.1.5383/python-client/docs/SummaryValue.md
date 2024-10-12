# SummaryValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 
**value** | [**TimedValue**](TimedValue.md) |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.summary_value import SummaryValue

# TODO update the JSON string below
json = "{}"
# create an instance of SummaryValue from a JSON string
summary_value_instance = SummaryValue.from_json(json)
# print the JSON string representation of the object
print(SummaryValue.to_json())

# convert the object into a dict
summary_value_dict = summary_value_instance.to_dict()
# create an instance of SummaryValue from a dict
summary_value_from_dict = SummaryValue.from_dict(summary_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


