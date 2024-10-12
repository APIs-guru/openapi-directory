# GoogleCloudAiplatformV1PublisherModelCallToAction

Actions could take on this Publisher Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_application** | [**GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences**](GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences.md) |  | [optional] 
**deploy** | [**GoogleCloudAiplatformV1PublisherModelCallToActionDeploy**](GoogleCloudAiplatformV1PublisherModelCallToActionDeploy.md) |  | [optional] 
**deploy_gke** | [**GoogleCloudAiplatformV1PublisherModelCallToActionDeployGke**](GoogleCloudAiplatformV1PublisherModelCallToActionDeployGke.md) |  | [optional] 
**open_evaluation_pipeline** | [**GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences**](GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences.md) |  | [optional] 
**open_fine_tuning_pipeline** | [**GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences**](GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences.md) |  | [optional] 
**open_fine_tuning_pipelines** | [**GoogleCloudAiplatformV1PublisherModelCallToActionOpenFineTuningPipelines**](GoogleCloudAiplatformV1PublisherModelCallToActionOpenFineTuningPipelines.md) |  | [optional] 
**open_generation_ai_studio** | [**GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences**](GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences.md) |  | [optional] 
**open_genie** | [**GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences**](GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences.md) |  | [optional] 
**open_notebook** | [**GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences**](GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences.md) |  | [optional] 
**open_notebooks** | [**GoogleCloudAiplatformV1PublisherModelCallToActionOpenNotebooks**](GoogleCloudAiplatformV1PublisherModelCallToActionOpenNotebooks.md) |  | [optional] 
**open_prompt_tuning_pipeline** | [**GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences**](GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences.md) |  | [optional] 
**request_access** | [**GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences**](GoogleCloudAiplatformV1PublisherModelCallToActionRegionalResourceReferences.md) |  | [optional] 
**view_rest_api** | [**GoogleCloudAiplatformV1PublisherModelCallToActionViewRestApi**](GoogleCloudAiplatformV1PublisherModelCallToActionViewRestApi.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_publisher_model_call_to_action import GoogleCloudAiplatformV1PublisherModelCallToAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1PublisherModelCallToAction from a JSON string
google_cloud_aiplatform_v1_publisher_model_call_to_action_instance = GoogleCloudAiplatformV1PublisherModelCallToAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1PublisherModelCallToAction.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_publisher_model_call_to_action_dict = google_cloud_aiplatform_v1_publisher_model_call_to_action_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1PublisherModelCallToAction from a dict
google_cloud_aiplatform_v1_publisher_model_call_to_action_from_dict = GoogleCloudAiplatformV1PublisherModelCallToAction.from_dict(google_cloud_aiplatform_v1_publisher_model_call_to_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


