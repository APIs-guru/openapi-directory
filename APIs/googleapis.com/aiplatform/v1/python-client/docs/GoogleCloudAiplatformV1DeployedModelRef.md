# GoogleCloudAiplatformV1DeployedModelRef

Points to a DeployedModel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_model_id** | **str** | Immutable. An ID of a DeployedModel in the above Endpoint. | [optional] 
**endpoint** | **str** | Immutable. A resource name of an Endpoint. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_deployed_model_ref import GoogleCloudAiplatformV1DeployedModelRef

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1DeployedModelRef from a JSON string
google_cloud_aiplatform_v1_deployed_model_ref_instance = GoogleCloudAiplatformV1DeployedModelRef.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1DeployedModelRef.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_deployed_model_ref_dict = google_cloud_aiplatform_v1_deployed_model_ref_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1DeployedModelRef from a dict
google_cloud_aiplatform_v1_deployed_model_ref_from_dict = GoogleCloudAiplatformV1DeployedModelRef.from_dict(google_cloud_aiplatform_v1_deployed_model_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


