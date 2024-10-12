# ImageNote

Basis describes the base image portion (Note) of the DockerImage relationship. Linked occurrences are derived from this or an equivalent image via: FROM Or an equivalent reference, e.g., a tag of the resource_url.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fingerprint** | [**Fingerprint**](Fingerprint.md) |  | [optional] 
**resource_url** | **str** | Required. Immutable. The resource_url for the resource representing the basis of associated occurrence images. | [optional] 

## Example

```python
from openapi_client.models.image_note import ImageNote

# TODO update the JSON string below
json = "{}"
# create an instance of ImageNote from a JSON string
image_note_instance = ImageNote.from_json(json)
# print the JSON string representation of the object
print(ImageNote.to_json())

# convert the object into a dict
image_note_dict = image_note_instance.to_dict()
# create an instance of ImageNote from a dict
image_note_from_dict = ImageNote.from_dict(image_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


