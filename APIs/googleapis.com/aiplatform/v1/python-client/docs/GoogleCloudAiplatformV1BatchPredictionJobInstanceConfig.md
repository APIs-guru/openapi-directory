# GoogleCloudAiplatformV1BatchPredictionJobInstanceConfig

Configuration defining how to transform batch prediction input instances to the instances that the Model accepts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_fields** | **List[str]** | Fields that will be excluded in the prediction instance that is sent to the Model. Excluded will be attached to the batch prediction output if key_field is not specified. When excluded_fields is populated, included_fields must be empty. The input must be JSONL with objects at each line, BigQuery or TfRecord. | [optional] 
**included_fields** | **List[str]** | Fields that will be included in the prediction instance that is sent to the Model. If instance_type is &#x60;array&#x60;, the order of field names in included_fields also determines the order of the values in the array. When included_fields is populated, excluded_fields must be empty. The input must be JSONL with objects at each line, BigQuery or TfRecord. | [optional] 
**instance_type** | **str** | The format of the instance that the Model accepts. Vertex AI will convert compatible batch prediction input instance formats to the specified format. Supported values are: * &#x60;object&#x60;: Each input is converted to JSON object format. * For &#x60;bigquery&#x60;, each row is converted to an object. * For &#x60;jsonl&#x60;, each line of the JSONL input must be an object. * Does not apply to &#x60;csv&#x60;, &#x60;file-list&#x60;, &#x60;tf-record&#x60;, or &#x60;tf-record-gzip&#x60;. * &#x60;array&#x60;: Each input is converted to JSON array format. * For &#x60;bigquery&#x60;, each row is converted to an array. The order of columns is determined by the BigQuery column order, unless included_fields is populated. included_fields must be populated for specifying field orders. * For &#x60;jsonl&#x60;, if each line of the JSONL input is an object, included_fields must be populated for specifying field orders. * Does not apply to &#x60;csv&#x60;, &#x60;file-list&#x60;, &#x60;tf-record&#x60;, or &#x60;tf-record-gzip&#x60;. If not specified, Vertex AI converts the batch prediction input as follows: * For &#x60;bigquery&#x60; and &#x60;csv&#x60;, the behavior is the same as &#x60;array&#x60;. The order of columns is the same as defined in the file or table, unless included_fields is populated. * For &#x60;jsonl&#x60;, the prediction instance format is determined by each line of the input. * For &#x60;tf-record&#x60;/&#x60;tf-record-gzip&#x60;, each record will be converted to an object in the format of &#x60;{\&quot;b64\&quot;: }&#x60;, where &#x60;&#x60; is the Base64-encoded string of the content of the record. * For &#x60;file-list&#x60;, each file in the list will be converted to an object in the format of &#x60;{\&quot;b64\&quot;: }&#x60;, where &#x60;&#x60; is the Base64-encoded string of the content of the file. | [optional] 
**key_field** | **str** | The name of the field that is considered as a key. The values identified by the key field is not included in the transformed instances that is sent to the Model. This is similar to specifying this name of the field in excluded_fields. In addition, the batch prediction output will not include the instances. Instead the output will only include the value of the key field, in a field named &#x60;key&#x60; in the output: * For &#x60;jsonl&#x60; output format, the output will have a &#x60;key&#x60; field instead of the &#x60;instance&#x60; field. * For &#x60;csv&#x60;/&#x60;bigquery&#x60; output format, the output will have have a &#x60;key&#x60; column instead of the instance feature columns. The input must be JSONL with objects at each line, CSV, BigQuery or TfRecord. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_batch_prediction_job_instance_config import GoogleCloudAiplatformV1BatchPredictionJobInstanceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1BatchPredictionJobInstanceConfig from a JSON string
google_cloud_aiplatform_v1_batch_prediction_job_instance_config_instance = GoogleCloudAiplatformV1BatchPredictionJobInstanceConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1BatchPredictionJobInstanceConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_batch_prediction_job_instance_config_dict = google_cloud_aiplatform_v1_batch_prediction_job_instance_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1BatchPredictionJobInstanceConfig from a dict
google_cloud_aiplatform_v1_batch_prediction_job_instance_config_from_dict = GoogleCloudAiplatformV1BatchPredictionJobInstanceConfig.from_dict(google_cloud_aiplatform_v1_batch_prediction_job_instance_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


