# ImageAnalysis

Result of AnalyzeImage operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adult** | [**AdultInfo**](AdultInfo.md) |  | [optional] 
**categories** | [**List[Category]**](Category.md) | An array indicating identified categories. | [optional] 
**color** | [**ColorInfo**](ColorInfo.md) |  | [optional] 
**description** | [**ImageDescriptionDetails**](ImageDescriptionDetails.md) |  | [optional] 
**faces** | [**List[FaceDescription]**](FaceDescription.md) | An array of possible faces within the image. | [optional] 
**image_type** | [**ImageType**](ImageType.md) |  | [optional] 
**metadata** | [**ImageMetadata**](ImageMetadata.md) |  | [optional] 
**request_id** | **str** | Id of the request for tracking purposes. | [optional] 
**tags** | [**List[ImageTag]**](ImageTag.md) | A list of tags with confidence level. | [optional] 

## Example

```python
from openapi_client.models.image_analysis import ImageAnalysis

# TODO update the JSON string below
json = "{}"
# create an instance of ImageAnalysis from a JSON string
image_analysis_instance = ImageAnalysis.from_json(json)
# print the JSON string representation of the object
print(ImageAnalysis.to_json())

# convert the object into a dict
image_analysis_dict = image_analysis_instance.to_dict()
# create an instance of ImageAnalysis from a dict
image_analysis_from_dict = ImageAnalysis.from_dict(image_analysis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


