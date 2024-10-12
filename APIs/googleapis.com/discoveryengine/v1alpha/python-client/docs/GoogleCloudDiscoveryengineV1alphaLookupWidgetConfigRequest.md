# GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigRequest

Request message for WidgetService.LookupWidgetConfig method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**widget_config_id** | **str** | Required. The UUID of the Widget Config. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_lookup_widget_config_request import GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigRequest from a JSON string
google_cloud_discoveryengine_v1alpha_lookup_widget_config_request_instance = GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_lookup_widget_config_request_dict = google_cloud_discoveryengine_v1alpha_lookup_widget_config_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigRequest from a dict
google_cloud_discoveryengine_v1alpha_lookup_widget_config_request_from_dict = GoogleCloudDiscoveryengineV1alphaLookupWidgetConfigRequest.from_dict(google_cloud_discoveryengine_v1alpha_lookup_widget_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


