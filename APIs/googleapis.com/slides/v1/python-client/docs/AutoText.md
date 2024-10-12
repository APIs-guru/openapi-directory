# AutoText

A TextElement kind that represents auto text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The rendered content of this auto text, if available. | [optional] 
**style** | [**TextStyle**](TextStyle.md) |  | [optional] 
**type** | **str** | The type of this auto text. | [optional] 

## Example

```python
from openapi_client.models.auto_text import AutoText

# TODO update the JSON string below
json = "{}"
# create an instance of AutoText from a JSON string
auto_text_instance = AutoText.from_json(json)
# print the JSON string representation of the object
print(AutoText.to_json())

# convert the object into a dict
auto_text_dict = auto_text_instance.to_dict()
# create an instance of AutoText from a dict
auto_text_from_dict = AutoText.from_dict(auto_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


