# ImageAnalysisByURL200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | [**ImageAnalysisByURL200ResponseCategory**](ImageAnalysisByURL200ResponseCategory.md) |  | 
**nutrition** | [**ImageAnalysisByURL200ResponseNutrition**](ImageAnalysisByURL200ResponseNutrition.md) |  | 
**recipes** | [**List[ImageAnalysisByURL200ResponseRecipesInner]**](ImageAnalysisByURL200ResponseRecipesInner.md) |  | 

## Example

```python
from openapi_client.models.image_analysis_by_url200_response import ImageAnalysisByURL200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ImageAnalysisByURL200Response from a JSON string
image_analysis_by_url200_response_instance = ImageAnalysisByURL200Response.from_json(json)
# print the JSON string representation of the object
print(ImageAnalysisByURL200Response.to_json())

# convert the object into a dict
image_analysis_by_url200_response_dict = image_analysis_by_url200_response_instance.to_dict()
# create an instance of ImageAnalysisByURL200Response from a dict
image_analysis_by_url200_response_from_dict = ImageAnalysisByURL200Response.from_dict(image_analysis_by_url200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


