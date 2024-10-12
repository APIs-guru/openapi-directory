# GoogleCloudPolicysimulatorV1beta1ReplayConfig

The configuration used for a Replay.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_source** | **str** | The logs to use as input for the Replay. | [optional] 
**policy_overlay** | [**Dict[str, GoogleIamV1Policy]**](GoogleIamV1Policy.md) | A mapping of the resources that you want to simulate policies for and the policies that you want to simulate. Keys are the full resource names for the resources. For example, &#x60;//cloudresourcemanager.googleapis.com/projects/my-project&#x60;. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. Values are Policy objects representing the policies that you want to simulate. Replays automatically take into account any IAM policies inherited through the resource hierarchy, and any policies set on descendant resources. You do not need to include these policies in the policy overlay. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1beta1_replay_config import GoogleCloudPolicysimulatorV1beta1ReplayConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1beta1ReplayConfig from a JSON string
google_cloud_policysimulator_v1beta1_replay_config_instance = GoogleCloudPolicysimulatorV1beta1ReplayConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1beta1ReplayConfig.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1beta1_replay_config_dict = google_cloud_policysimulator_v1beta1_replay_config_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1beta1ReplayConfig from a dict
google_cloud_policysimulator_v1beta1_replay_config_from_dict = GoogleCloudPolicysimulatorV1beta1ReplayConfig.from_dict(google_cloud_policysimulator_v1beta1_replay_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


