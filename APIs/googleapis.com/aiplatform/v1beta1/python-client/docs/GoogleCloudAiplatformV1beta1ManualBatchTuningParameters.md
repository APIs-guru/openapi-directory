# GoogleCloudAiplatformV1beta1ManualBatchTuningParameters

Manual batch tuning parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_size** | **int** | Immutable. The number of the records (e.g. instances) of the operation given in each batch to a machine replica. Machine type, and size of a single record should be considered when setting this parameter, higher value speeds up the batch operation&#39;s execution, but too high value will result in a whole batch not fitting in a machine&#39;s memory, and the whole operation will fail. The default value is 64. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_manual_batch_tuning_parameters import GoogleCloudAiplatformV1beta1ManualBatchTuningParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ManualBatchTuningParameters from a JSON string
google_cloud_aiplatform_v1beta1_manual_batch_tuning_parameters_instance = GoogleCloudAiplatformV1beta1ManualBatchTuningParameters.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ManualBatchTuningParameters.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_manual_batch_tuning_parameters_dict = google_cloud_aiplatform_v1beta1_manual_batch_tuning_parameters_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ManualBatchTuningParameters from a dict
google_cloud_aiplatform_v1beta1_manual_batch_tuning_parameters_from_dict = GoogleCloudAiplatformV1beta1ManualBatchTuningParameters.from_dict(google_cloud_aiplatform_v1beta1_manual_batch_tuning_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


