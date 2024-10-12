# UserPhoto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**height** | **int** | Height of the photo in pixels. | [optional] 
**id** | **str** | The ID the API uses to uniquely identify the user. | [optional] 
**kind** | **str** | The type of the API resource. For Photo resources, this is &#x60;admin#directory#user#photo&#x60;. | [optional] [default to 'admin#directory#user#photo']
**mime_type** | **str** | The MIME type of the photo. Allowed values are &#x60;JPEG&#x60;, &#x60;PNG&#x60;, &#x60;GIF&#x60;, &#x60;BMP&#x60;, &#x60;TIFF&#x60;, and web-safe base64 encoding. | [optional] 
**photo_data** | **bytearray** | The user photo&#39;s upload data in [web-safe Base64](https://en.wikipedia.org/wiki/Base64#URL_applications) format in bytes. This means: * The slash (/) character is replaced with the underscore (_) character. * The plus sign (+) character is replaced with the hyphen (-) character. * The equals sign (&#x3D;) character is replaced with the asterisk (*). * For padding, the period (.) character is used instead of the RFC-4648 baseURL definition which uses the equals sign (&#x3D;) for padding. This is done to simplify URL-parsing. * Whatever the size of the photo being uploaded, the API downsizes it to 96x96 pixels. | [optional] 
**primary_email** | **str** | The user&#39;s primary email address. | [optional] 
**width** | **int** | Width of the photo in pixels. | [optional] 

## Example

```python
from openapi_client.models.user_photo import UserPhoto

# TODO update the JSON string below
json = "{}"
# create an instance of UserPhoto from a JSON string
user_photo_instance = UserPhoto.from_json(json)
# print the JSON string representation of the object
print(UserPhoto.to_json())

# convert the object into a dict
user_photo_dict = user_photo_instance.to_dict()
# create an instance of UserPhoto from a dict
user_photo_from_dict = UserPhoto.from_dict(user_photo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


