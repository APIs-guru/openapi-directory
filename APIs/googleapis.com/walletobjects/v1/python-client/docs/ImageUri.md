# ImageUri


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Additional information about the image, which is unused and retained only for backward compatibility. | [optional] 
**localized_description** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**uri** | **str** | The location of the image. URIs must have a scheme. | [optional] 

## Example

```python
from openapi_client.models.image_uri import ImageUri

# TODO update the JSON string below
json = "{}"
# create an instance of ImageUri from a JSON string
image_uri_instance = ImageUri.from_json(json)
# print the JSON string representation of the object
print(ImageUri.to_json())

# convert the object into a dict
image_uri_dict = image_uri_instance.to_dict()
# create an instance of ImageUri from a dict
image_uri_from_dict = ImageUri.from_dict(image_uri_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


