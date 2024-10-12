# VolumePatchPropertiesExportPolicy

Export policy rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[ExportPolicyRule]**](ExportPolicyRule.md) |  | [optional] 

## Example

```python
from openapi_client.models.volume_patch_properties_export_policy import VolumePatchPropertiesExportPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of VolumePatchPropertiesExportPolicy from a JSON string
volume_patch_properties_export_policy_instance = VolumePatchPropertiesExportPolicy.from_json(json)
# print the JSON string representation of the object
print(VolumePatchPropertiesExportPolicy.to_json())

# convert the object into a dict
volume_patch_properties_export_policy_dict = volume_patch_properties_export_policy_instance.to_dict()
# create an instance of VolumePatchPropertiesExportPolicy from a dict
volume_patch_properties_export_policy_from_dict = VolumePatchPropertiesExportPolicy.from_dict(volume_patch_properties_export_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


