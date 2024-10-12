# VolumePatchProperties

Patchable volume properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_policy** | [**VolumePatchPropertiesExportPolicy**](VolumePatchPropertiesExportPolicy.md) |  | [optional] 
**service_level** | **str** | The service level of the file system | [optional] [default to 'Premium']
**usage_threshold** | **int** | Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. | [optional] [default to 107374182400]

## Example

```python
from openapi_client.models.volume_patch_properties import VolumePatchProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VolumePatchProperties from a JSON string
volume_patch_properties_instance = VolumePatchProperties.from_json(json)
# print the JSON string representation of the object
print(VolumePatchProperties.to_json())

# convert the object into a dict
volume_patch_properties_dict = volume_patch_properties_instance.to_dict()
# create an instance of VolumePatchProperties from a dict
volume_patch_properties_from_dict = VolumePatchProperties.from_dict(volume_patch_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


