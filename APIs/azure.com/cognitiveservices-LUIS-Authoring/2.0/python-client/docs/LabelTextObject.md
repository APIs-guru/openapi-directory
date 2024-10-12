# LabelTextObject

An object containing the example utterance's text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the Label. | [optional] 
**text** | **str** | The text of the label. | [optional] 

## Example

```python
from openapi_client.models.label_text_object import LabelTextObject

# TODO update the JSON string below
json = "{}"
# create an instance of LabelTextObject from a JSON string
label_text_object_instance = LabelTextObject.from_json(json)
# print the JSON string representation of the object
print(LabelTextObject.to_json())

# convert the object into a dict
label_text_object_dict = label_text_object_instance.to_dict()
# create an instance of LabelTextObject from a dict
label_text_object_from_dict = LabelTextObject.from_dict(label_text_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


