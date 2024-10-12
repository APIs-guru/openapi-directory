# GoogleCloudIntegrationsV1alphaErrorCatcherConfig

Configuration detail of a error catch task

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. User-provided description intended to give more business context about the error catcher config. | [optional] 
**error_catcher_id** | **str** | Required. An error catcher id is string representation for the error catcher config. Within a workflow, error_catcher_id uniquely identifies an error catcher config among all error catcher configs for the workflow | [optional] 
**error_catcher_number** | **str** | Required. A number to uniquely identify each error catcher config within the workflow on UI. | [optional] 
**label** | **str** | Optional. The user created label for a particular error catcher. Optional. | [optional] 
**position** | [**GoogleCloudIntegrationsV1alphaCoordinate**](GoogleCloudIntegrationsV1alphaCoordinate.md) |  | [optional] 
**start_error_tasks** | [**List[GoogleCloudIntegrationsV1alphaNextTask]**](GoogleCloudIntegrationsV1alphaNextTask.md) | Required. The set of start tasks that are to be executed for the error catch flow | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_error_catcher_config import GoogleCloudIntegrationsV1alphaErrorCatcherConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaErrorCatcherConfig from a JSON string
google_cloud_integrations_v1alpha_error_catcher_config_instance = GoogleCloudIntegrationsV1alphaErrorCatcherConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaErrorCatcherConfig.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_error_catcher_config_dict = google_cloud_integrations_v1alpha_error_catcher_config_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaErrorCatcherConfig from a dict
google_cloud_integrations_v1alpha_error_catcher_config_from_dict = GoogleCloudIntegrationsV1alphaErrorCatcherConfig.from_dict(google_cloud_integrations_v1alpha_error_catcher_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


