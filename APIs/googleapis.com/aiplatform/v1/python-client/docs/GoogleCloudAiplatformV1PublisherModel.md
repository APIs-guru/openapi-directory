# GoogleCloudAiplatformV1PublisherModel

A Model Garden Publisher Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frameworks** | **List[str]** | Optional. Additional information about the model&#39;s Frameworks. | [optional] 
**launch_stage** | **str** | Optional. Indicates the launch stage of the model. | [optional] 
**name** | **str** | Output only. The resource name of the PublisherModel. | [optional] [readonly] 
**open_source_category** | **str** | Required. Indicates the open source category of the publisher model. | [optional] 
**predict_schemata** | [**GoogleCloudAiplatformV1PredictSchemata**](GoogleCloudAiplatformV1PredictSchemata.md) |  | [optional] 
**publisher_model_template** | **str** | Optional. Output only. Immutable. Used to indicate this model has a publisher model and provide the template of the publisher model resource name. | [optional] [readonly] 
**supported_actions** | [**GoogleCloudAiplatformV1PublisherModelCallToAction**](GoogleCloudAiplatformV1PublisherModelCallToAction.md) |  | [optional] 
**version_id** | **str** | Output only. Immutable. The version ID of the PublisherModel. A new version is committed when a new model version is uploaded under an existing model id. It is an auto-incrementing decimal number in string representation. | [optional] [readonly] 
**version_state** | **str** | Optional. Indicates the state of the model version. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_publisher_model import GoogleCloudAiplatformV1PublisherModel

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1PublisherModel from a JSON string
google_cloud_aiplatform_v1_publisher_model_instance = GoogleCloudAiplatformV1PublisherModel.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1PublisherModel.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_publisher_model_dict = google_cloud_aiplatform_v1_publisher_model_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1PublisherModel from a dict
google_cloud_aiplatform_v1_publisher_model_from_dict = GoogleCloudAiplatformV1PublisherModel.from_dict(google_cloud_aiplatform_v1_publisher_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


