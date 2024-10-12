# GoogleCloudAiplatformV1beta1CheckTrialEarlyStoppingStateMetatdata

This message will be placed in the metadata field of a google.longrunning.Operation associated with a CheckTrialEarlyStoppingState request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generic_metadata** | [**GoogleCloudAiplatformV1beta1GenericOperationMetadata**](GoogleCloudAiplatformV1beta1GenericOperationMetadata.md) |  | [optional] 
**study** | **str** | The name of the Study that the Trial belongs to. | [optional] 
**trial** | **str** | The Trial name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_check_trial_early_stopping_state_metatdata import GoogleCloudAiplatformV1beta1CheckTrialEarlyStoppingStateMetatdata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1CheckTrialEarlyStoppingStateMetatdata from a JSON string
google_cloud_aiplatform_v1beta1_check_trial_early_stopping_state_metatdata_instance = GoogleCloudAiplatformV1beta1CheckTrialEarlyStoppingStateMetatdata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1CheckTrialEarlyStoppingStateMetatdata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_check_trial_early_stopping_state_metatdata_dict = google_cloud_aiplatform_v1beta1_check_trial_early_stopping_state_metatdata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1CheckTrialEarlyStoppingStateMetatdata from a dict
google_cloud_aiplatform_v1beta1_check_trial_early_stopping_state_metatdata_from_dict = GoogleCloudAiplatformV1beta1CheckTrialEarlyStoppingStateMetatdata.from_dict(google_cloud_aiplatform_v1beta1_check_trial_early_stopping_state_metatdata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


