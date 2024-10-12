# PersonImage

The representation of the person's profile photo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_default** | **bool** | Whether the person&#39;s profile photo is the default one | [optional] 
**url** | **str** | The URL of the person&#39;s profile photo. To resize the image and crop it to a square, append the query string ?sz&#x3D;x, where x is the dimension in pixels of each side. | [optional] 

## Example

```python
from openapi_client.models.person_image import PersonImage

# TODO update the JSON string below
json = "{}"
# create an instance of PersonImage from a JSON string
person_image_instance = PersonImage.from_json(json)
# print the JSON string representation of the object
print(PersonImage.to_json())

# convert the object into a dict
person_image_dict = person_image_instance.to_dict()
# create an instance of PersonImage from a dict
person_image_from_dict = PersonImage.from_dict(person_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


