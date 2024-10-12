# ViberOneOf1AllOfImage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** | A caption to accompany the image. Required if the message includes an action button. | [optional] 
**url** | **str** | The URL of the image attachment.  Supports &#x60;.jpg&#x60;, &#x60;.jpeg&#x60;, and &#x60;.png&#x60;.  | [optional] 

## Example

```python
from openapi_client.models.viber_one_of1_all_of_image import ViberOneOf1AllOfImage

# TODO update the JSON string below
json = "{}"
# create an instance of ViberOneOf1AllOfImage from a JSON string
viber_one_of1_all_of_image_instance = ViberOneOf1AllOfImage.from_json(json)
# print the JSON string representation of the object
print(ViberOneOf1AllOfImage.to_json())

# convert the object into a dict
viber_one_of1_all_of_image_dict = viber_one_of1_all_of_image_instance.to_dict()
# create an instance of ViberOneOf1AllOfImage from a dict
viber_one_of1_all_of_image_from_dict = ViberOneOf1AllOfImage.from_dict(viber_one_of1_all_of_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


