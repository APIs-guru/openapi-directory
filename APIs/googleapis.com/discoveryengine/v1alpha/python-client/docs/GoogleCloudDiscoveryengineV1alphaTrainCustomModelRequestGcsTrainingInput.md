# GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequestGcsTrainingInput

Cloud Storage training data input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**corpus_data_path** | **str** | The Cloud Storage corpus data which could be associated in train data. The data path format is gs:///. A newline delimited jsonl/ndjson file. For search-tuning model, each line should have the _id, title and text. Example: {\&quot;_id\&quot;: \&quot;doc1\&quot;, title: \&quot;relevant doc\&quot;, \&quot;text\&quot;: \&quot;relevant text\&quot;} | [optional] 
**query_data_path** | **str** | The gcs query data which could be associated in train data. The data path format is gs:///. A newline delimited jsonl/ndjson file. For search-tuning model, each line should have the _id and text. Example: {\&quot;_id\&quot;: \&quot;query1\&quot;, \&quot;text\&quot;: \&quot;example query\&quot;} | [optional] 
**test_data_path** | **str** | Cloud Storage test data. Same format as train_data_path. If not provided, a random 80/20 train/test split will be performed on train_data_path. | [optional] 
**train_data_path** | **str** | Cloud Storage training data path whose format should be gs:///. The file should be in tsv format. Each line should have the doc_id and query_id and score (number). For search-tuning model, it should have the query-id corpus-id score as tsv file header. The score should be a number in [0, inf+). The larger the number is, the more relevant the pair is. Example: query-id\\tcorpus-id\\tscore query1\\tdoc1\\t1 | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_train_custom_model_request_gcs_training_input import GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequestGcsTrainingInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequestGcsTrainingInput from a JSON string
google_cloud_discoveryengine_v1alpha_train_custom_model_request_gcs_training_input_instance = GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequestGcsTrainingInput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequestGcsTrainingInput.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_train_custom_model_request_gcs_training_input_dict = google_cloud_discoveryengine_v1alpha_train_custom_model_request_gcs_training_input_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequestGcsTrainingInput from a dict
google_cloud_discoveryengine_v1alpha_train_custom_model_request_gcs_training_input_from_dict = GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequestGcsTrainingInput.from_dict(google_cloud_discoveryengine_v1alpha_train_custom_model_request_gcs_training_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


