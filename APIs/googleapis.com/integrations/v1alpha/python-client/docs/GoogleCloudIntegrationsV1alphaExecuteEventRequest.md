# GoogleCloudIntegrationsV1alphaExecuteEventRequest

Request for triggering an integration using event triggers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_event** | [**IoCloudeventsV1CloudEvent**](IoCloudeventsV1CloudEvent.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_execute_event_request import GoogleCloudIntegrationsV1alphaExecuteEventRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaExecuteEventRequest from a JSON string
google_cloud_integrations_v1alpha_execute_event_request_instance = GoogleCloudIntegrationsV1alphaExecuteEventRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaExecuteEventRequest.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_execute_event_request_dict = google_cloud_integrations_v1alpha_execute_event_request_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaExecuteEventRequest from a dict
google_cloud_integrations_v1alpha_execute_event_request_from_dict = GoogleCloudIntegrationsV1alphaExecuteEventRequest.from_dict(google_cloud_integrations_v1alpha_execute_event_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


