# Border

A border along a cell.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | [**Color**](Color.md) |  | [optional] 
**color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**style** | **str** | The style of the border. | [optional] 
**width** | **int** | The width of the border, in pixels. Deprecated; the width is determined by the \&quot;style\&quot; field. | [optional] 

## Example

```python
from openapi_client.models.border import Border

# TODO update the JSON string below
json = "{}"
# create an instance of Border from a JSON string
border_instance = Border.from_json(json)
# print the JSON string representation of the object
print(Border.to_json())

# convert the object into a dict
border_dict = border_instance.to_dict()
# create an instance of Border from a dict
border_from_dict = Border.from_dict(border_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


