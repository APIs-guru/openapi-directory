# GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse

Response message for WidgetService.LookupWidgetConfig method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anonymous_widget_config** | [**GoogleCloudDiscoveryengineV1alphaWidgetConfig**](GoogleCloudDiscoveryengineV1alphaWidgetConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_lookup_widget_config_response import GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse from a JSON string
google_cloud_discoveryengine_v1alpha_lookup_widget_config_response_instance = GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_lookup_widget_config_response_dict = google_cloud_discoveryengine_v1alpha_lookup_widget_config_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse from a dict
google_cloud_discoveryengine_v1alpha_lookup_widget_config_response_from_dict = GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigResponse.from_dict(google_cloud_discoveryengine_v1alpha_lookup_widget_config_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


