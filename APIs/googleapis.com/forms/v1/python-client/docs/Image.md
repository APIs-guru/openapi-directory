# Image

Data representing an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alt_text** | **str** | A description of the image that is shown on hover and read by screenreaders. | [optional] 
**content_uri** | **str** | Output only. A URI from which you can download the image; this is valid only for a limited time. | [optional] [readonly] 
**properties** | [**MediaProperties**](MediaProperties.md) |  | [optional] 
**source_uri** | **str** | Input only. The source URI is the URI used to insert the image. The source URI can be empty when fetched. | [optional] 

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


