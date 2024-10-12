# FeatureSettings

The feature specific settings to be used in the application. These define behaviors that are user configurable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**split_health_checks** | **bool** | Boolean value indicating if split health checks should be used instead of the legacy health checks. At an app.yaml level, this means defaulting to &#39;readiness_check&#39; and &#39;liveness_check&#39; values instead of &#39;health_check&#39; ones. Once the legacy &#39;health_check&#39; behavior is deprecated, and this value is always true, this setting can be removed. | [optional] 
**use_container_optimized_os** | **bool** | If true, use Container-Optimized OS (https://cloud.google.com/container-optimized-os/) base image for VMs, rather than a base Debian image. | [optional] 

## Example

```python
from openapi_client.models.feature_settings import FeatureSettings

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureSettings from a JSON string
feature_settings_instance = FeatureSettings.from_json(json)
# print the JSON string representation of the object
print(FeatureSettings.to_json())

# convert the object into a dict
feature_settings_dict = feature_settings_instance.to_dict()
# create an instance of FeatureSettings from a dict
feature_settings_from_dict = FeatureSettings.from_dict(feature_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


