# GoogleCloudVisionV1p2beta1Page

Detected page from OCR.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocks** | [**List[GoogleCloudVisionV1p2beta1Block]**](GoogleCloudVisionV1p2beta1Block.md) | List of blocks of text, images etc on this page. | [optional] 
**confidence** | **float** | Confidence of the OCR results on the page. Range [0, 1]. | [optional] 
**height** | **int** | Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. | [optional] 
**var_property** | [**GoogleCloudVisionV1p2beta1TextAnnotationTextProperty**](GoogleCloudVisionV1p2beta1TextAnnotationTextProperty.md) |  | [optional] 
**width** | **int** | Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p2beta1_page import GoogleCloudVisionV1p2beta1Page

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p2beta1Page from a JSON string
google_cloud_vision_v1p2beta1_page_instance = GoogleCloudVisionV1p2beta1Page.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p2beta1Page.to_json())

# convert the object into a dict
google_cloud_vision_v1p2beta1_page_dict = google_cloud_vision_v1p2beta1_page_instance.to_dict()
# create an instance of GoogleCloudVisionV1p2beta1Page from a dict
google_cloud_vision_v1p2beta1_page_from_dict = GoogleCloudVisionV1p2beta1Page.from_dict(google_cloud_vision_v1p2beta1_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


