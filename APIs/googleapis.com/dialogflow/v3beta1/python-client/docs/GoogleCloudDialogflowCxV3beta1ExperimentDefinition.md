# GoogleCloudDialogflowCxV3beta1ExperimentDefinition

Definition of the experiment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **str** | The condition defines which subset of sessions are selected for this experiment. If not specified, all sessions are eligible. E.g. \&quot;query_input.language_code&#x3D;en\&quot; See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). | [optional] 
**version_variants** | [**GoogleCloudDialogflowCxV3beta1VersionVariants**](GoogleCloudDialogflowCxV3beta1VersionVariants.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_experiment_definition import GoogleCloudDialogflowCxV3beta1ExperimentDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ExperimentDefinition from a JSON string
google_cloud_dialogflow_cx_v3beta1_experiment_definition_instance = GoogleCloudDialogflowCxV3beta1ExperimentDefinition.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ExperimentDefinition.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_experiment_definition_dict = google_cloud_dialogflow_cx_v3beta1_experiment_definition_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ExperimentDefinition from a dict
google_cloud_dialogflow_cx_v3beta1_experiment_definition_from_dict = GoogleCloudDialogflowCxV3beta1ExperimentDefinition.from_dict(google_cloud_dialogflow_cx_v3beta1_experiment_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


