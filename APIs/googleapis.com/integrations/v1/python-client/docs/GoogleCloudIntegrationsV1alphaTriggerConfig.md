# GoogleCloudIntegrationsV1alphaTriggerConfig

Configuration detail of a trigger.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_config** | [**List[GoogleCloudIntegrationsV1alphaIntegrationAlertConfig]**](GoogleCloudIntegrationsV1alphaIntegrationAlertConfig.md) | Optional. An alert threshold configuration for the [trigger + client + integration] tuple. If these values are not specified in the trigger config, default values will be populated by the system. Note that there must be exactly one alert threshold configured per [client + trigger + integration] when published. | [optional] 
**cloud_scheduler_config** | [**GoogleCloudIntegrationsV1alphaCloudSchedulerConfig**](GoogleCloudIntegrationsV1alphaCloudSchedulerConfig.md) |  | [optional] 
**description** | **str** | Optional. User-provided description intended to give additional business context about the task. | [optional] 
**error_catcher_id** | **str** | Optional. Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task | [optional] 
**label** | **str** | Optional. The user created label for a particular trigger. | [optional] 
**next_tasks_execution_policy** | **str** | Optional. Dictates how next tasks will be executed. | [optional] 
**position** | [**GoogleCloudIntegrationsV1alphaCoordinate**](GoogleCloudIntegrationsV1alphaCoordinate.md) |  | [optional] 
**properties** | **Dict[str, str]** | Optional. Configurable properties of the trigger, not to be confused with integration parameters. E.g. \&quot;name\&quot; is a property for API triggers and \&quot;subscription\&quot; is a property for Pub/sub triggers. | [optional] 
**start_tasks** | [**List[GoogleCloudIntegrationsV1alphaNextTask]**](GoogleCloudIntegrationsV1alphaNextTask.md) | Optional. Set of tasks numbers from where the integration execution is started by this trigger. If this is empty, then integration is executed with default start tasks. In the list of start tasks, none of two tasks can have direct ancestor-descendant relationships (i.e. in a same integration execution graph). | [optional] 
**trigger** | **str** | Optional. Name of the trigger. Example: \&quot;API Trigger\&quot;, \&quot;Cloud Pub Sub Trigger\&quot; When set will be sent out to monitoring dashabord for tracking purpose. | [optional] 
**trigger_id** | **str** | Optional. The backend trigger ID. | [optional] 
**trigger_number** | **str** | Required. A number to uniquely identify each trigger config within the integration on UI. | [optional] 
**trigger_type** | **str** | Optional. Type of trigger | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_trigger_config import GoogleCloudIntegrationsV1alphaTriggerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaTriggerConfig from a JSON string
google_cloud_integrations_v1alpha_trigger_config_instance = GoogleCloudIntegrationsV1alphaTriggerConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaTriggerConfig.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_trigger_config_dict = google_cloud_integrations_v1alpha_trigger_config_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaTriggerConfig from a dict
google_cloud_integrations_v1alpha_trigger_config_from_dict = GoogleCloudIntegrationsV1alphaTriggerConfig.from_dict(google_cloud_integrations_v1alpha_trigger_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


