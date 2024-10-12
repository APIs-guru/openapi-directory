# ImageResponseDto

When setting the Accept-header in the request to \"application/json\" the image file will be return as Base64 encoded string. Note that converting data to Base64 encoded strings increases the response size with approximately 33%, if you can accept the a binary format it's better to use Accept-header \"image/jpeg\", \"image/png\" or \"image/gif\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | If any error occurs the message will be displayed in here | [optional] 
**image_base64_string** | **str** | The Base64 encoded string that is the image file. This is a complete data uri, including media type that can be used directly as src on a img-tag e.g. | [optional] 

## Example

```python
from openapi_client.models.image_response_dto import ImageResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of ImageResponseDto from a JSON string
image_response_dto_instance = ImageResponseDto.from_json(json)
# print the JSON string representation of the object
print(ImageResponseDto.to_json())

# convert the object into a dict
image_response_dto_dict = image_response_dto_instance.to_dict()
# create an instance of ImageResponseDto from a dict
image_response_dto_from_dict = ImageResponseDto.from_dict(image_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


