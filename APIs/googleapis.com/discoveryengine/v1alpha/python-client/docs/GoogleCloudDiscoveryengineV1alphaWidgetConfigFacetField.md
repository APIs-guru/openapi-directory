# GoogleCloudDiscoveryengineV1alphaWidgetConfigFacetField

Facet fields that store the mapping of fields to end user widget appearance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Optional. The field name that end users will see. | [optional] 
**var_field** | **str** | Required. Registered field name. The format is &#x60;field.abc&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_widget_config_facet_field import GoogleCloudDiscoveryengineV1alphaWidgetConfigFacetField

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaWidgetConfigFacetField from a JSON string
google_cloud_discoveryengine_v1alpha_widget_config_facet_field_instance = GoogleCloudDiscoveryengineV1alphaWidgetConfigFacetField.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaWidgetConfigFacetField.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_widget_config_facet_field_dict = google_cloud_discoveryengine_v1alpha_widget_config_facet_field_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaWidgetConfigFacetField from a dict
google_cloud_discoveryengine_v1alpha_widget_config_facet_field_from_dict = GoogleCloudDiscoveryengineV1alphaWidgetConfigFacetField.from_dict(google_cloud_discoveryengine_v1alpha_widget_config_facet_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


