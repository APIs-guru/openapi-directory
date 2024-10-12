# ImageButton

An image button with an `onclick` action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**icon** | **str** | The icon specified by an &#x60;enum&#x60; that indices to an icon provided by Chat API. | [optional] 
**icon_url** | **str** | The icon specified by a URL. | [optional] 
**name** | **str** | The name of this &#x60;image_button&#x60; that&#39;s used for accessibility. Default value is provided if this name isn&#39;t specified. | [optional] 
**on_click** | [**OnClick**](OnClick.md) |  | [optional] 

## Example

```python
from openapi_client.models.image_button import ImageButton

# TODO update the JSON string below
json = "{}"
# create an instance of ImageButton from a JSON string
image_button_instance = ImageButton.from_json(json)
# print the JSON string representation of the object
print(ImageButton.to_json())

# convert the object into a dict
image_button_dict = image_button_instance.to_dict()
# create an instance of ImageButton from a dict
image_button_from_dict = ImageButton.from_dict(image_button_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


