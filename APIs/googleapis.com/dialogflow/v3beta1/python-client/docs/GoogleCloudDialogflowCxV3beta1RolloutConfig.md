# GoogleCloudDialogflowCxV3beta1RolloutConfig

The configuration for auto rollout.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_condition** | **str** | The conditions that are used to evaluate the failure of a rollout step. If not specified, no rollout steps will fail. E.g. \&quot;containment_rate &lt; 10% OR average_turn_count &lt; 3\&quot;. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). | [optional] 
**rollout_condition** | **str** | The conditions that are used to evaluate the success of a rollout step. If not specified, all rollout steps will proceed to the next one unless failure conditions are met. E.g. \&quot;containment_rate &gt; 60% AND callback_rate &lt; 20%\&quot;. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). | [optional] 
**rollout_steps** | [**List[GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep]**](GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep.md) | Steps to roll out a flow version. Steps should be sorted by percentage in ascending order. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_rollout_config import GoogleCloudDialogflowCxV3beta1RolloutConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1RolloutConfig from a JSON string
google_cloud_dialogflow_cx_v3beta1_rollout_config_instance = GoogleCloudDialogflowCxV3beta1RolloutConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1RolloutConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_rollout_config_dict = google_cloud_dialogflow_cx_v3beta1_rollout_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1RolloutConfig from a dict
google_cloud_dialogflow_cx_v3beta1_rollout_config_from_dict = GoogleCloudDialogflowCxV3beta1RolloutConfig.from_dict(google_cloud_dialogflow_cx_v3beta1_rollout_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


