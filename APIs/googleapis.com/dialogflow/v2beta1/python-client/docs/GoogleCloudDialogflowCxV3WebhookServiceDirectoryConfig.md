# GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig

Represents configuration for a [Service Directory](https://cloud.google.com/service-directory) service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generic_web_service** | [**GoogleCloudDialogflowCxV3WebhookGenericWebService**](GoogleCloudDialogflowCxV3WebhookGenericWebService.md) |  | [optional] 
**service** | **str** | Required. The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: &#x60;projects//locations//namespaces//services/&#x60;. &#x60;Location ID&#x60; of the service directory must be the same as the location of the agent. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_webhook_service_directory_config import GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig from a JSON string
google_cloud_dialogflow_cx_v3_webhook_service_directory_config_instance = GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_webhook_service_directory_config_dict = google_cloud_dialogflow_cx_v3_webhook_service_directory_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig from a dict
google_cloud_dialogflow_cx_v3_webhook_service_directory_config_from_dict = GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig.from_dict(google_cloud_dialogflow_cx_v3_webhook_service_directory_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


