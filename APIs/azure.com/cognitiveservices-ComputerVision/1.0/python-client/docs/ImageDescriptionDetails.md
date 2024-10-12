# ImageDescriptionDetails

A collection of content tags, along with a list of captions sorted by confidence level, and image metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**captions** | [**List[ImageCaption]**](ImageCaption.md) | A list of captions, sorted by confidence level. | [optional] 
**metadata** | [**ImageMetadata**](ImageMetadata.md) |  | [optional] 
**request_id** | **str** | Id of the REST API request. | [optional] 
**tags** | **List[str]** | A collection of image tags. | [optional] 

## Example

```python
from openapi_client.models.image_description_details import ImageDescriptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ImageDescriptionDetails from a JSON string
image_description_details_instance = ImageDescriptionDetails.from_json(json)
# print the JSON string representation of the object
print(ImageDescriptionDetails.to_json())

# convert the object into a dict
image_description_details_dict = image_description_details_instance.to_dict()
# create an instance of ImageDescriptionDetails from a dict
image_description_details_from_dict = ImageDescriptionDetails.from_dict(image_description_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


