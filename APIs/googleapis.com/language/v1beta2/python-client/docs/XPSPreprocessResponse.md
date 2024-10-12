# XPSPreprocessResponse

Next ID: 8

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_example_set** | [**XPSExampleSet**](XPSExampleSet.md) |  | [optional] 
**speech_preprocess_resp** | [**XPSSpeechPreprocessResponse**](XPSSpeechPreprocessResponse.md) |  | [optional] 
**tables_preprocess_response** | [**XPSTablesPreprocessResponse**](XPSTablesPreprocessResponse.md) |  | [optional] 
**translation_preprocess_resp** | [**XPSTranslationPreprocessResponse**](XPSTranslationPreprocessResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.xps_preprocess_response import XPSPreprocessResponse

# TODO update the JSON string below
json = "{}"
# create an instance of XPSPreprocessResponse from a JSON string
xps_preprocess_response_instance = XPSPreprocessResponse.from_json(json)
# print the JSON string representation of the object
print(XPSPreprocessResponse.to_json())

# convert the object into a dict
xps_preprocess_response_dict = xps_preprocess_response_instance.to_dict()
# create an instance of XPSPreprocessResponse from a dict
xps_preprocess_response_from_dict = XPSPreprocessResponse.from_dict(xps_preprocess_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


