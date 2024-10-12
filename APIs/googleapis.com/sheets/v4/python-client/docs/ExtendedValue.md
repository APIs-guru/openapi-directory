# ExtendedValue

The kinds of value that a cell in a spreadsheet can have.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | Represents a boolean value. | [optional] 
**error_value** | [**ErrorValue**](ErrorValue.md) |  | [optional] 
**formula_value** | **str** | Represents a formula. | [optional] 
**number_value** | **float** | Represents a double value. Note: Dates, Times and DateTimes are represented as doubles in SERIAL_NUMBER format. | [optional] 
**string_value** | **str** | Represents a string value. Leading single quotes are not included. For example, if the user typed &#x60;&#39;123&#x60; into the UI, this would be represented as a &#x60;stringValue&#x60; of &#x60;\&quot;123\&quot;&#x60;. | [optional] 

## Example

```python
from openapi_client.models.extended_value import ExtendedValue

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedValue from a JSON string
extended_value_instance = ExtendedValue.from_json(json)
# print the JSON string representation of the object
print(ExtendedValue.to_json())

# convert the object into a dict
extended_value_dict = extended_value_instance.to_dict()
# create an instance of ExtendedValue from a dict
extended_value_from_dict = ExtendedValue.from_dict(extended_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


