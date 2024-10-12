# NumberFormat

The number format of a cell.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pattern** | **str** | Pattern string used for formatting. If not set, a default pattern based on the user&#39;s locale will be used if necessary for the given type. See the [Date and Number Formats guide](/sheets/api/guides/formats) for more information about the supported patterns. | [optional] 
**type** | **str** | The type of the number format. When writing, this field must be set. | [optional] 

## Example

```python
from openapi_client.models.number_format import NumberFormat

# TODO update the JSON string below
json = "{}"
# create an instance of NumberFormat from a JSON string
number_format_instance = NumberFormat.from_json(json)
# print the JSON string representation of the object
print(NumberFormat.to_json())

# convert the object into a dict
number_format_dict = number_format_instance.to_dict()
# create an instance of NumberFormat from a dict
number_format_from_dict = NumberFormat.from_dict(number_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


