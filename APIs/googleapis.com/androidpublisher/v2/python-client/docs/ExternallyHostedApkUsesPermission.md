# ExternallyHostedApkUsesPermission

A permission used by this APK.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_sdk_version** | **int** | Optionally, the maximum SDK version for which the permission is required. | [optional] 
**name** | **str** | The name of the permission requested. | [optional] 

## Example

```python
from openapi_client.models.externally_hosted_apk_uses_permission import ExternallyHostedApkUsesPermission

# TODO update the JSON string below
json = "{}"
# create an instance of ExternallyHostedApkUsesPermission from a JSON string
externally_hosted_apk_uses_permission_instance = ExternallyHostedApkUsesPermission.from_json(json)
# print the JSON string representation of the object
print(ExternallyHostedApkUsesPermission.to_json())

# convert the object into a dict
externally_hosted_apk_uses_permission_dict = externally_hosted_apk_uses_permission_instance.to_dict()
# create an instance of ExternallyHostedApkUsesPermission from a dict
externally_hosted_apk_uses_permission_from_dict = ExternallyHostedApkUsesPermission.from_dict(externally_hosted_apk_uses_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


