# GoogleCloudAiplatformV1beta1NasTrialDetail

Represents a NasTrial details along with its parameters. If there is a corresponding train NasTrial, the train NasTrial is also returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. Resource name of the NasTrialDetail. | [optional] [readonly] 
**parameters** | **str** | The parameters for the NasJob NasTrial. | [optional] 
**search_trial** | [**GoogleCloudAiplatformV1beta1NasTrial**](GoogleCloudAiplatformV1beta1NasTrial.md) |  | [optional] 
**train_trial** | [**GoogleCloudAiplatformV1beta1NasTrial**](GoogleCloudAiplatformV1beta1NasTrial.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_nas_trial_detail import GoogleCloudAiplatformV1beta1NasTrialDetail

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1NasTrialDetail from a JSON string
google_cloud_aiplatform_v1beta1_nas_trial_detail_instance = GoogleCloudAiplatformV1beta1NasTrialDetail.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1NasTrialDetail.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_nas_trial_detail_dict = google_cloud_aiplatform_v1beta1_nas_trial_detail_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1NasTrialDetail from a dict
google_cloud_aiplatform_v1beta1_nas_trial_detail_from_dict = GoogleCloudAiplatformV1beta1NasTrialDetail.from_dict(google_cloud_aiplatform_v1beta1_nas_trial_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


