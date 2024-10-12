# GoogleCloudIntegrationsV1alphaFailurePolicy

Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interval_time** | **str** | Required if retry_strategy is FIXED_INTERVAL or LINEAR/EXPONENTIAL_BACKOFF/RESTART_INTEGRATION_WITH_BACKOFF. Defines the initial interval in seconds for backoff. | [optional] 
**max_retries** | **int** | Required if retry_strategy is FIXED_INTERVAL or LINEAR/EXPONENTIAL_BACKOFF/RESTART_INTEGRATION_WITH_BACKOFF. Defines the number of times the task will be retried if failed. | [optional] 
**retry_strategy** | **str** | Defines what happens to the task upon failure. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_failure_policy import GoogleCloudIntegrationsV1alphaFailurePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaFailurePolicy from a JSON string
google_cloud_integrations_v1alpha_failure_policy_instance = GoogleCloudIntegrationsV1alphaFailurePolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaFailurePolicy.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_failure_policy_dict = google_cloud_integrations_v1alpha_failure_policy_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaFailurePolicy from a dict
google_cloud_integrations_v1alpha_failure_policy_from_dict = GoogleCloudIntegrationsV1alphaFailurePolicy.from_dict(google_cloud_integrations_v1alpha_failure_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


