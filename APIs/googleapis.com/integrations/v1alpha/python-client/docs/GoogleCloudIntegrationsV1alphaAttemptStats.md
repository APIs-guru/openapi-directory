# GoogleCloudIntegrationsV1alphaAttemptStats

Status for the execution attempt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The end time of the event execution for current attempt. | [optional] 
**start_time** | **str** | The start time of the event execution for current attempt. This could be in the future if it&#39;s been scheduled. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_attempt_stats import GoogleCloudIntegrationsV1alphaAttemptStats

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaAttemptStats from a JSON string
google_cloud_integrations_v1alpha_attempt_stats_instance = GoogleCloudIntegrationsV1alphaAttemptStats.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaAttemptStats.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_attempt_stats_dict = google_cloud_integrations_v1alpha_attempt_stats_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaAttemptStats from a dict
google_cloud_integrations_v1alpha_attempt_stats_from_dict = GoogleCloudIntegrationsV1alphaAttemptStats.from_dict(google_cloud_integrations_v1alpha_attempt_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


