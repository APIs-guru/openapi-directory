# CloudAiLargeModelsVisionFilteredText

Details for filtered input text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Confidence level | [optional] 
**confidence** | **str** | Filtered category | [optional] 
**prompt** | **str** | Input prompt | [optional] 
**score** | **float** | Score for category | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_large_models_vision_filtered_text import CloudAiLargeModelsVisionFilteredText

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiLargeModelsVisionFilteredText from a JSON string
cloud_ai_large_models_vision_filtered_text_instance = CloudAiLargeModelsVisionFilteredText.from_json(json)
# print the JSON string representation of the object
print(CloudAiLargeModelsVisionFilteredText.to_json())

# convert the object into a dict
cloud_ai_large_models_vision_filtered_text_dict = cloud_ai_large_models_vision_filtered_text_instance.to_dict()
# create an instance of CloudAiLargeModelsVisionFilteredText from a dict
cloud_ai_large_models_vision_filtered_text_from_dict = CloudAiLargeModelsVisionFilteredText.from_dict(cloud_ai_large_models_vision_filtered_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


