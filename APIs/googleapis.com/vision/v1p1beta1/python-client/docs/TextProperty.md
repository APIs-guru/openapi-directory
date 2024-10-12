# TextProperty

Additional information detected on the structural component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_break** | [**DetectedBreak**](DetectedBreak.md) |  | [optional] 
**detected_languages** | [**List[DetectedLanguage]**](DetectedLanguage.md) | A list of detected languages together with confidence. | [optional] 

## Example

```python
from openapi_client.models.text_property import TextProperty

# TODO update the JSON string below
json = "{}"
# create an instance of TextProperty from a JSON string
text_property_instance = TextProperty.from_json(json)
# print the JSON string representation of the object
print(TextProperty.to_json())

# convert the object into a dict
text_property_dict = text_property_instance.to_dict()
# create an instance of TextProperty from a dict
text_property_from_dict = TextProperty.from_dict(text_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


