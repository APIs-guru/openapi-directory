# BatchPredictOutputInfo

Further describes this batch predict's output. Supplements BatchPredictOutputConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_output_dataset** | **str** | The path of the BigQuery dataset created, in bq://projectId.bqDatasetId format, into which the prediction output is written. | [optional] 
**gcs_output_directory** | **str** | The full path of the Google Cloud Storage directory created, into which the prediction output is written. | [optional] 

## Example

```python
from openapi_client.models.batch_predict_output_info import BatchPredictOutputInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BatchPredictOutputInfo from a JSON string
batch_predict_output_info_instance = BatchPredictOutputInfo.from_json(json)
# print the JSON string representation of the object
print(BatchPredictOutputInfo.to_json())

# convert the object into a dict
batch_predict_output_info_dict = batch_predict_output_info_instance.to_dict()
# create an instance of BatchPredictOutputInfo from a dict
batch_predict_output_info_from_dict = BatchPredictOutputInfo.from_dict(batch_predict_output_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


