# GoogleCloudPolicysimulatorV1AccessStateDiff

A summary and comparison of the principal's access under the current (baseline) policies and the proposed (simulated) policies for a single access tuple.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_change** | **str** | How the principal&#39;s access, specified in the AccessState field, changed between the current (baseline) policies and proposed (simulated) policies. | [optional] 
**baseline** | [**GoogleCloudPolicysimulatorV1ExplainedAccess**](GoogleCloudPolicysimulatorV1ExplainedAccess.md) |  | [optional] 
**simulated** | [**GoogleCloudPolicysimulatorV1ExplainedAccess**](GoogleCloudPolicysimulatorV1ExplainedAccess.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1_access_state_diff import GoogleCloudPolicysimulatorV1AccessStateDiff

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1AccessStateDiff from a JSON string
google_cloud_policysimulator_v1_access_state_diff_instance = GoogleCloudPolicysimulatorV1AccessStateDiff.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1AccessStateDiff.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1_access_state_diff_dict = google_cloud_policysimulator_v1_access_state_diff_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1AccessStateDiff from a dict
google_cloud_policysimulator_v1_access_state_diff_from_dict = GoogleCloudPolicysimulatorV1AccessStateDiff.from_dict(google_cloud_policysimulator_v1_access_state_diff_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


