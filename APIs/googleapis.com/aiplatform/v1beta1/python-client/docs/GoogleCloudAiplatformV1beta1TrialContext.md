# GoogleCloudAiplatformV1beta1TrialContext

Next ID: 3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A human-readable field which can store a description of this context. This will become part of the resulting Trial&#39;s description field. | [optional] 
**parameters** | [**List[GoogleCloudAiplatformV1beta1TrialParameter]**](GoogleCloudAiplatformV1beta1TrialParameter.md) | If/when a Trial is generated or selected from this Context, its Parameters will match any parameters specified here. (I.e. if this context specifies parameter name:&#39;a&#39; int_value:3, then a resulting Trial will have int_value:3 for its parameter named &#39;a&#39;.) Note that we first attempt to match existing REQUESTED Trials with contexts, and if there are no matches, we generate suggestions in the subspace defined by the parameters specified here. NOTE: a Context without any Parameters matches the entire feasible search space. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_trial_context import GoogleCloudAiplatformV1beta1TrialContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1TrialContext from a JSON string
google_cloud_aiplatform_v1beta1_trial_context_instance = GoogleCloudAiplatformV1beta1TrialContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1TrialContext.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_trial_context_dict = google_cloud_aiplatform_v1beta1_trial_context_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1TrialContext from a dict
google_cloud_aiplatform_v1beta1_trial_context_from_dict = GoogleCloudAiplatformV1beta1TrialContext.from_dict(google_cloud_aiplatform_v1beta1_trial_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


