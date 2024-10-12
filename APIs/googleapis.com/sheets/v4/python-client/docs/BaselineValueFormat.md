# BaselineValueFormat

Formatting options for baseline value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparison_type** | **str** | The comparison type of key value with baseline value. | [optional] 
**description** | **str** | Description which is appended after the baseline value. This field is optional. | [optional] 
**negative_color** | [**Color**](Color.md) |  | [optional] 
**negative_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**position** | [**TextPosition**](TextPosition.md) |  | [optional] 
**positive_color** | [**Color**](Color.md) |  | [optional] 
**positive_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**text_format** | [**TextFormat**](TextFormat.md) |  | [optional] 

## Example

```python
from openapi_client.models.baseline_value_format import BaselineValueFormat

# TODO update the JSON string below
json = "{}"
# create an instance of BaselineValueFormat from a JSON string
baseline_value_format_instance = BaselineValueFormat.from_json(json)
# print the JSON string representation of the object
print(BaselineValueFormat.to_json())

# convert the object into a dict
baseline_value_format_dict = baseline_value_format_instance.to_dict()
# create an instance of BaselineValueFormat from a dict
baseline_value_format_from_dict = BaselineValueFormat.from_dict(baseline_value_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


