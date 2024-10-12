# GoogleCloudDiscoveryengineV1alphaTrainCustomModelResponse

Response of the TrainCustomModelRequest. This message is returned by the google.longrunning.Operations.response field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_config** | [**GoogleCloudDiscoveryengineV1alphaImportErrorConfig**](GoogleCloudDiscoveryengineV1alphaImportErrorConfig.md) |  | [optional] 
**error_samples** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | A sample of errors encountered while processing the data. | [optional] 
**model_status** | **str** | The trained model status. Possible values are: * **bad-data**: The training data quality is bad. * **no-improvement**: Tuning didn&#39;t improve performance. Won&#39;t deploy. * **in-progress**: Model training is in progress. * **ready**: The model is ready for serving. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_train_custom_model_response import GoogleCloudDiscoveryengineV1alphaTrainCustomModelResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaTrainCustomModelResponse from a JSON string
google_cloud_discoveryengine_v1alpha_train_custom_model_response_instance = GoogleCloudDiscoveryengineV1alphaTrainCustomModelResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaTrainCustomModelResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_train_custom_model_response_dict = google_cloud_discoveryengine_v1alpha_train_custom_model_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaTrainCustomModelResponse from a dict
google_cloud_discoveryengine_v1alpha_train_custom_model_response_from_dict = GoogleCloudDiscoveryengineV1alphaTrainCustomModelResponse.from_dict(google_cloud_discoveryengine_v1alpha_train_custom_model_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


