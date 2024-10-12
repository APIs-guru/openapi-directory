# GoogleCloudIntegrationsV1alphaEventParameter

This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the integration definition. | [optional] 
**value** | [**GoogleCloudIntegrationsV1alphaValueType**](GoogleCloudIntegrationsV1alphaValueType.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_event_parameter import GoogleCloudIntegrationsV1alphaEventParameter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaEventParameter from a JSON string
google_cloud_integrations_v1alpha_event_parameter_instance = GoogleCloudIntegrationsV1alphaEventParameter.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaEventParameter.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_event_parameter_dict = google_cloud_integrations_v1alpha_event_parameter_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaEventParameter from a dict
google_cloud_integrations_v1alpha_event_parameter_from_dict = GoogleCloudIntegrationsV1alphaEventParameter.from_dict(google_cloud_integrations_v1alpha_event_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


