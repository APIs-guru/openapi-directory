# GoogleCloudAiplatformV1beta1NasTrial

Represents a uCAIP NasJob trial.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Output only. Time when the NasTrial&#39;s status changed to &#x60;SUCCEEDED&#x60; or &#x60;INFEASIBLE&#x60;. | [optional] [readonly] 
**final_measurement** | [**GoogleCloudAiplatformV1beta1Measurement**](GoogleCloudAiplatformV1beta1Measurement.md) |  | [optional] 
**id** | **str** | Output only. The identifier of the NasTrial assigned by the service. | [optional] [readonly] 
**start_time** | **str** | Output only. Time when the NasTrial was started. | [optional] [readonly] 
**state** | **str** | Output only. The detailed state of the NasTrial. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_nas_trial import GoogleCloudAiplatformV1beta1NasTrial

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1NasTrial from a JSON string
google_cloud_aiplatform_v1beta1_nas_trial_instance = GoogleCloudAiplatformV1beta1NasTrial.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1NasTrial.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_nas_trial_dict = google_cloud_aiplatform_v1beta1_nas_trial_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1NasTrial from a dict
google_cloud_aiplatform_v1beta1_nas_trial_from_dict = GoogleCloudAiplatformV1beta1NasTrial.from_dict(google_cloud_aiplatform_v1beta1_nas_trial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


