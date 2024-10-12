# DrmSystems

Defines configuration for DRM systems in use.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clearkey** | **object** | Clearkey configuration. | [optional] 
**fairplay** | **object** | Fairplay configuration. | [optional] 
**playready** | **object** | Playready configuration. | [optional] 
**widevine** | **object** | Widevine configuration. | [optional] 

## Example

```python
from openapi_client.models.drm_systems import DrmSystems

# TODO update the JSON string below
json = "{}"
# create an instance of DrmSystems from a JSON string
drm_systems_instance = DrmSystems.from_json(json)
# print the JSON string representation of the object
print(DrmSystems.to_json())

# convert the object into a dict
drm_systems_dict = drm_systems_instance.to_dict()
# create an instance of DrmSystems from a dict
drm_systems_from_dict = DrmSystems.from_dict(drm_systems_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


