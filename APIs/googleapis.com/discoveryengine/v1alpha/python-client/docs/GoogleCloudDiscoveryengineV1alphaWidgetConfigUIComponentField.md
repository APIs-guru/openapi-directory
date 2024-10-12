# GoogleCloudDiscoveryengineV1alphaWidgetConfigUIComponentField

Facet field that maps to a UI Component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_visibility** | **List[str]** | The field visibility on different types of devices. | [optional] 
**display_template** | **str** | The template to customize how the field is displayed. An example value would be a string that looks like: \&quot;Price: {value}\&quot;. | [optional] 
**var_field** | **str** | Required. Registered field name. The format is &#x60;field.abc&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_widget_config_ui_component_field import GoogleCloudDiscoveryengineV1alphaWidgetConfigUIComponentField

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaWidgetConfigUIComponentField from a JSON string
google_cloud_discoveryengine_v1alpha_widget_config_ui_component_field_instance = GoogleCloudDiscoveryengineV1alphaWidgetConfigUIComponentField.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaWidgetConfigUIComponentField.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_widget_config_ui_component_field_dict = google_cloud_discoveryengine_v1alpha_widget_config_ui_component_field_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaWidgetConfigUIComponentField from a dict
google_cloud_discoveryengine_v1alpha_widget_config_ui_component_field_from_dict = GoogleCloudDiscoveryengineV1alphaWidgetConfigUIComponentField.from_dict(google_cloud_discoveryengine_v1alpha_widget_config_ui_component_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


