# XPSSpeechPreprocessResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cns_test_data_path** | **str** | Location od shards of sstables (test data) of DataUtterance protos. | [optional] 
**cns_train_data_path** | **str** | Location of shards of sstables (training data) of DataUtterance protos. | [optional] 
**prebuilt_model_evaluation_metrics** | [**XPSSpeechEvaluationMetrics**](XPSSpeechEvaluationMetrics.md) |  | [optional] 
**speech_preprocess_stats** | [**XPSSpeechPreprocessStats**](XPSSpeechPreprocessStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.xps_speech_preprocess_response import XPSSpeechPreprocessResponse

# TODO update the JSON string below
json = "{}"
# create an instance of XPSSpeechPreprocessResponse from a JSON string
xps_speech_preprocess_response_instance = XPSSpeechPreprocessResponse.from_json(json)
# print the JSON string representation of the object
print(XPSSpeechPreprocessResponse.to_json())

# convert the object into a dict
xps_speech_preprocess_response_dict = xps_speech_preprocess_response_instance.to_dict()
# create an instance of XPSSpeechPreprocessResponse from a dict
xps_speech_preprocess_response_from_dict = XPSSpeechPreprocessResponse.from_dict(xps_speech_preprocess_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


