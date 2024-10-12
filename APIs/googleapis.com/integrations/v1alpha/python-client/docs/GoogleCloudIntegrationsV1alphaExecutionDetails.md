# GoogleCloudIntegrationsV1alphaExecutionDetails

Contains the details of the execution info: this includes the tasks execution details plus the event execution statistics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt_stats** | [**List[GoogleCloudIntegrationsV1alphaAttemptStats]**](GoogleCloudIntegrationsV1alphaAttemptStats.md) | List of Start and end time of the execution attempts. | [optional] 
**execution_snapshots** | [**List[GoogleCloudIntegrationsV1alphaExecutionSnapshot]**](GoogleCloudIntegrationsV1alphaExecutionSnapshot.md) | List of snapshots taken during the execution. | [optional] 
**state** | **str** | Status of the execution. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_execution_details import GoogleCloudIntegrationsV1alphaExecutionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaExecutionDetails from a JSON string
google_cloud_integrations_v1alpha_execution_details_instance = GoogleCloudIntegrationsV1alphaExecutionDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaExecutionDetails.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_execution_details_dict = google_cloud_integrations_v1alpha_execution_details_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaExecutionDetails from a dict
google_cloud_integrations_v1alpha_execution_details_from_dict = GoogleCloudIntegrationsV1alphaExecutionDetails.from_dict(google_cloud_integrations_v1alpha_execution_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


