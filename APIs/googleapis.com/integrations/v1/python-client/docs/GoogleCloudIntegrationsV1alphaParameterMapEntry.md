# GoogleCloudIntegrationsV1alphaParameterMapEntry

Entry is a pair of key and value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | [**GoogleCloudIntegrationsV1alphaParameterMapField**](GoogleCloudIntegrationsV1alphaParameterMapField.md) |  | [optional] 
**value** | [**GoogleCloudIntegrationsV1alphaParameterMapField**](GoogleCloudIntegrationsV1alphaParameterMapField.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_parameter_map_entry import GoogleCloudIntegrationsV1alphaParameterMapEntry

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaParameterMapEntry from a JSON string
google_cloud_integrations_v1alpha_parameter_map_entry_instance = GoogleCloudIntegrationsV1alphaParameterMapEntry.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaParameterMapEntry.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_parameter_map_entry_dict = google_cloud_integrations_v1alpha_parameter_map_entry_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaParameterMapEntry from a dict
google_cloud_integrations_v1alpha_parameter_map_entry_from_dict = GoogleCloudIntegrationsV1alphaParameterMapEntry.from_dict(google_cloud_integrations_v1alpha_parameter_map_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


