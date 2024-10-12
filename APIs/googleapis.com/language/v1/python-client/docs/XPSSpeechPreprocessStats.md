# XPSSpeechPreprocessStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_errors** | [**List[XPSDataErrors]**](XPSDataErrors.md) | Different types of data errors and the counts associated with them. | [optional] 
**num_human_labeled_examples** | **int** | The number of rows marked HUMAN_LABELLED | [optional] 
**num_logs_examples** | **int** | The number of samples found in the previously recorded logs data. | [optional] 
**num_machine_transcribed_examples** | **int** | The number of rows marked as MACHINE_TRANSCRIBED | [optional] 
**test_examples_count** | **int** | The number of examples labelled as TEST by Speech xps server. | [optional] 
**test_sentences_count** | **int** | The number of sentences in the test data set. | [optional] 
**test_words_count** | **int** | The number of words in the test data set. | [optional] 
**train_examples_count** | **int** | The number of examples labeled as TRAIN by Speech xps server. | [optional] 
**train_sentences_count** | **int** | The number of sentences in the training data set. | [optional] 
**train_words_count** | **int** | The number of words in the training data set. | [optional] 

## Example

```python
from openapi_client.models.xps_speech_preprocess_stats import XPSSpeechPreprocessStats

# TODO update the JSON string below
json = "{}"
# create an instance of XPSSpeechPreprocessStats from a JSON string
xps_speech_preprocess_stats_instance = XPSSpeechPreprocessStats.from_json(json)
# print the JSON string representation of the object
print(XPSSpeechPreprocessStats.to_json())

# convert the object into a dict
xps_speech_preprocess_stats_dict = xps_speech_preprocess_stats_instance.to_dict()
# create an instance of XPSSpeechPreprocessStats from a dict
xps_speech_preprocess_stats_from_dict = XPSSpeechPreprocessStats.from_dict(xps_speech_preprocess_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


