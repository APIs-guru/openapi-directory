# LineProperties

The properties of the Line. When unset, these fields default to values that match the appearance of new lines created in the Slides editor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dash_style** | **str** | The dash style of the line. | [optional] 
**end_arrow** | **str** | The style of the arrow at the end of the line. | [optional] 
**end_connection** | [**LineConnection**](LineConnection.md) |  | [optional] 
**line_fill** | [**LineFill**](LineFill.md) |  | [optional] 
**link** | [**Link**](Link.md) |  | [optional] 
**start_arrow** | **str** | The style of the arrow at the beginning of the line. | [optional] 
**start_connection** | [**LineConnection**](LineConnection.md) |  | [optional] 
**weight** | [**Dimension**](Dimension.md) |  | [optional] 

## Example

```python
from openapi_client.models.line_properties import LineProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LineProperties from a JSON string
line_properties_instance = LineProperties.from_json(json)
# print the JSON string representation of the object
print(LineProperties.to_json())

# convert the object into a dict
line_properties_dict = line_properties_instance.to_dict()
# create an instance of LineProperties from a dict
line_properties_from_dict = LineProperties.from_dict(line_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


