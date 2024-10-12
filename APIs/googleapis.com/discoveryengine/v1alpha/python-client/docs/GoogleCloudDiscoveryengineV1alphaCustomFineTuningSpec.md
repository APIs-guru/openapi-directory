# GoogleCloudDiscoveryengineV1alphaCustomFineTuningSpec

Defines custom fine tuning spec.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_search_adaptor** | **bool** | Whether or not to enable and include custom fine tuned search adaptor model. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_custom_fine_tuning_spec import GoogleCloudDiscoveryengineV1alphaCustomFineTuningSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaCustomFineTuningSpec from a JSON string
google_cloud_discoveryengine_v1alpha_custom_fine_tuning_spec_instance = GoogleCloudDiscoveryengineV1alphaCustomFineTuningSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaCustomFineTuningSpec.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_custom_fine_tuning_spec_dict = google_cloud_discoveryengine_v1alpha_custom_fine_tuning_spec_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaCustomFineTuningSpec from a dict
google_cloud_discoveryengine_v1alpha_custom_fine_tuning_spec_from_dict = GoogleCloudDiscoveryengineV1alphaCustomFineTuningSpec.from_dict(google_cloud_discoveryengine_v1alpha_custom_fine_tuning_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


