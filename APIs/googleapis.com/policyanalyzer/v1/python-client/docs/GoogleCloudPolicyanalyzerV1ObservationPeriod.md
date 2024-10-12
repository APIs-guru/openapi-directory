# GoogleCloudPolicyanalyzerV1ObservationPeriod

Represents data observation period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The observation end time. The time in this timestamp is always &#x60;07:00:00Z&#x60;. | [optional] 
**start_time** | **str** | The observation start time. The time in this timestamp is always &#x60;07:00:00Z&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policyanalyzer_v1_observation_period import GoogleCloudPolicyanalyzerV1ObservationPeriod

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicyanalyzerV1ObservationPeriod from a JSON string
google_cloud_policyanalyzer_v1_observation_period_instance = GoogleCloudPolicyanalyzerV1ObservationPeriod.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicyanalyzerV1ObservationPeriod.to_json())

# convert the object into a dict
google_cloud_policyanalyzer_v1_observation_period_dict = google_cloud_policyanalyzer_v1_observation_period_instance.to_dict()
# create an instance of GoogleCloudPolicyanalyzerV1ObservationPeriod from a dict
google_cloud_policyanalyzer_v1_observation_period_from_dict = GoogleCloudPolicyanalyzerV1ObservationPeriod.from_dict(google_cloud_policyanalyzer_v1_observation_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


