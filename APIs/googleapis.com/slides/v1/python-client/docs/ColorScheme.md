# ColorScheme

The palette of predefined colors for a page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**colors** | [**List[ThemeColorPair]**](ThemeColorPair.md) | The ThemeColorType and corresponding concrete color pairs. | [optional] 

## Example

```python
from openapi_client.models.color_scheme import ColorScheme

# TODO update the JSON string below
json = "{}"
# create an instance of ColorScheme from a JSON string
color_scheme_instance = ColorScheme.from_json(json)
# print the JSON string representation of the object
print(ColorScheme.to_json())

# convert the object into a dict
color_scheme_dict = color_scheme_instance.to_dict()
# create an instance of ColorScheme from a dict
color_scheme_from_dict = ColorScheme.from_dict(color_scheme_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


