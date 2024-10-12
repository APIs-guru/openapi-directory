# GoogleCloudIntegrationsV1alphaParameterMapField

Field represents either the key or value in an entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**literal_value** | [**GoogleCloudIntegrationsV1alphaValueType**](GoogleCloudIntegrationsV1alphaValueType.md) |  | [optional] 
**reference_key** | **str** | Referencing one of the Integration variables. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_parameter_map_field import GoogleCloudIntegrationsV1alphaParameterMapField

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaParameterMapField from a JSON string
google_cloud_integrations_v1alpha_parameter_map_field_instance = GoogleCloudIntegrationsV1alphaParameterMapField.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaParameterMapField.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_parameter_map_field_dict = google_cloud_integrations_v1alpha_parameter_map_field_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaParameterMapField from a dict
google_cloud_integrations_v1alpha_parameter_map_field_from_dict = GoogleCloudIntegrationsV1alphaParameterMapField.from_dict(google_cloud_integrations_v1alpha_parameter_map_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


