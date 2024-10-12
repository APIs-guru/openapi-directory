# GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequest

Request message for SearchTuningService.TrainCustomModel method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_config** | [**GoogleCloudDiscoveryengineV1alphaImportErrorConfig**](GoogleCloudDiscoveryengineV1alphaImportErrorConfig.md) |  | [optional] 
**gcs_training_input** | [**GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequestGcsTrainingInput**](GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequestGcsTrainingInput.md) |  | [optional] 
**model_type** | **str** | Model to be trained. Supported values are: * **search-tuning**: Fine tuning the search system based on data provided. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_train_custom_model_request import GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequest from a JSON string
google_cloud_discoveryengine_v1alpha_train_custom_model_request_instance = GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_train_custom_model_request_dict = google_cloud_discoveryengine_v1alpha_train_custom_model_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequest from a dict
google_cloud_discoveryengine_v1alpha_train_custom_model_request_from_dict = GoogleCloudDiscoveryengineV1alphaTrainCustomModelRequest.from_dict(google_cloud_discoveryengine_v1alpha_train_custom_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


