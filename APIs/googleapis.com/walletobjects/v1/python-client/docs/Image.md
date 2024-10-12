# Image

Wrapping type for Google hosted images. Next ID: 7

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_description** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#image\&quot;&#x60;. | [optional] 
**source_uri** | [**ImageUri**](ImageUri.md) |  | [optional] 

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


