# GoogleCloudIntegrationsV1alphaParameterMap

A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[GoogleCloudIntegrationsV1alphaParameterMapEntry]**](GoogleCloudIntegrationsV1alphaParameterMapEntry.md) | A list of parameter map entries. | [optional] 
**key_type** | **str** | Option to specify key type for all entries of the map. If provided then field types for all entries must conform to this. | [optional] 
**value_type** | **str** | Option to specify value type for all entries of the map. If provided then field types for all entries must conform to this. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_parameter_map import GoogleCloudIntegrationsV1alphaParameterMap

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaParameterMap from a JSON string
google_cloud_integrations_v1alpha_parameter_map_instance = GoogleCloudIntegrationsV1alphaParameterMap.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaParameterMap.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_parameter_map_dict = google_cloud_integrations_v1alpha_parameter_map_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaParameterMap from a dict
google_cloud_integrations_v1alpha_parameter_map_from_dict = GoogleCloudIntegrationsV1alphaParameterMap.from_dict(google_cloud_integrations_v1alpha_parameter_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


