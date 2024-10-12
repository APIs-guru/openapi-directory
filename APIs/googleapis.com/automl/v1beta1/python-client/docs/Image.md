# Image

A representation of an image. Only images up to 30MB in size are supported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_bytes** | **bytearray** | Image content represented as a stream of bytes. Note: As with all &#x60;bytes&#x60; fields, protobuffers use a pure binary representation, whereas JSON representations use base64. | [optional] 
**input_config** | [**InputConfig**](InputConfig.md) |  | [optional] 
**thumbnail_uri** | **str** | Output only. HTTP URI to the thumbnail image. | [optional] 

## Example

```python
from openapi_client.models.image import Image

# TODO update the JSON string below
json = "{}"
# create an instance of Image from a JSON string
image_instance = Image.from_json(json)
# print the JSON string representation of the object
print(Image.to_json())

# convert the object into a dict
image_dict = image_instance.to_dict()
# create an instance of Image from a dict
image_from_dict = Image.from_dict(image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


