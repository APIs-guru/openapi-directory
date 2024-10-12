# BetweenFilter

To express that the result needs to be between two numbers (inclusive).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_value** | [**NumericValue**](NumericValue.md) |  | [optional] 
**to_value** | [**NumericValue**](NumericValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.between_filter import BetweenFilter

# TODO update the JSON string below
json = "{}"
# create an instance of BetweenFilter from a JSON string
between_filter_instance = BetweenFilter.from_json(json)
# print the JSON string representation of the object
print(BetweenFilter.to_json())

# convert the object into a dict
between_filter_dict = between_filter_instance.to_dict()
# create an instance of BetweenFilter from a dict
between_filter_from_dict = BetweenFilter.from_dict(between_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


