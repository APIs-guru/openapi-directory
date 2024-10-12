# ColorDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background** | **str** | The background color associated with this color definition. | [optional] 
**foreground** | **str** | The foreground color that can be used to write on top of a background with &#39;background&#39; color. | [optional] 

## Example

```python
from openapi_client.models.color_definition import ColorDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ColorDefinition from a JSON string
color_definition_instance = ColorDefinition.from_json(json)
# print the JSON string representation of the object
print(ColorDefinition.to_json())

# convert the object into a dict
color_definition_dict = color_definition_instance.to_dict()
# create an instance of ColorDefinition from a dict
color_definition_from_dict = ColorDefinition.from_dict(color_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


