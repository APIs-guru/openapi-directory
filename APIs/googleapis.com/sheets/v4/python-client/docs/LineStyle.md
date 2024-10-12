# LineStyle

Properties that describe the style of a line.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The dash type of the line. | [optional] 
**width** | **int** | The thickness of the line, in px. | [optional] 

## Example

```python
from openapi_client.models.line_style import LineStyle

# TODO update the JSON string below
json = "{}"
# create an instance of LineStyle from a JSON string
line_style_instance = LineStyle.from_json(json)
# print the JSON string representation of the object
print(LineStyle.to_json())

# convert the object into a dict
line_style_dict = line_style_instance.to_dict()
# create an instance of LineStyle from a dict
line_style_from_dict = LineStyle.from_dict(line_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


