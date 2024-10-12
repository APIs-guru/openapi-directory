# TextDetectionParams

Parameters for text detections. This is used to control TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_ocr_options** | **List[str]** | A list of advanced OCR options to further fine-tune OCR behavior. Current valid values are: - &#x60;legacy_layout&#x60;: a heuristics layout detection algorithm, which serves as an alternative to the current ML-based layout detection algorithm. Customers can choose the best suitable layout algorithm based on their situation. | [optional] 
**enable_text_detection_confidence_score** | **bool** | By default, Cloud Vision API only includes confidence score for DOCUMENT_TEXT_DETECTION result. Set the flag to true to include confidence score for TEXT_DETECTION as well. | [optional] 

## Example

```python
from openapi_client.models.text_detection_params import TextDetectionParams

# TODO update the JSON string below
json = "{}"
# create an instance of TextDetectionParams from a JSON string
text_detection_params_instance = TextDetectionParams.from_json(json)
# print the JSON string representation of the object
print(TextDetectionParams.to_json())

# convert the object into a dict
text_detection_params_dict = text_detection_params_instance.to_dict()
# create an instance of TextDetectionParams from a dict
text_detection_params_from_dict = TextDetectionParams.from_dict(text_detection_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


