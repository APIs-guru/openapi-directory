# ImageProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** | Additional text to accompany the image. Supported by WhatsApp and MMS. | [optional] 
**url** | **str** | The URL of the image attachment. &#x60;messenger&#x60; and &#x60;mms&#x60; supports .jpg, .jpeg, .png and .gif. &#x60;viber_service_msg&#x60; supports .jpg .jpeg, and .png. &#x60;whatsapp&#x60; supports .jpg .jpeg, and .png. | [optional] 

## Example

```python
from openapi_client.models.image_property import ImageProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ImageProperty from a JSON string
image_property_instance = ImageProperty.from_json(json)
# print the JSON string representation of the object
print(ImageProperty.to_json())

# convert the object into a dict
image_property_dict = image_property_instance.to_dict()
# create an instance of ImageProperty from a dict
image_property_from_dict = ImageProperty.from_dict(image_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


