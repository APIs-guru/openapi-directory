# ZypperSettings

Zypper patching is performed by running `zypper patch`. See also https://en.opensuse.org/SDB:Zypper_manual.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | **List[str]** | Install only patches with these categories. Common categories include security, recommended, and feature. | [optional] 
**excludes** | **List[str]** | List of patches to exclude from update. | [optional] 
**exclusive_patches** | **List[str]** | An exclusive list of patches to be updated. These are the only patches that will be installed using &#39;zypper patch patch:&#39; command. This field must not be used with any other patch configuration fields. | [optional] 
**severities** | **List[str]** | Install only patches with these severities. Common severities include critical, important, moderate, and low. | [optional] 
**with_optional** | **bool** | Adds the &#x60;--with-optional&#x60; flag to &#x60;zypper patch&#x60;. | [optional] 
**with_update** | **bool** | Adds the &#x60;--with-update&#x60; flag, to &#x60;zypper patch&#x60;. | [optional] 

## Example

```python
from openapi_client.models.zypper_settings import ZypperSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ZypperSettings from a JSON string
zypper_settings_instance = ZypperSettings.from_json(json)
# print the JSON string representation of the object
print(ZypperSettings.to_json())

# convert the object into a dict
zypper_settings_dict = zypper_settings_instance.to_dict()
# create an instance of ZypperSettings from a dict
zypper_settings_from_dict = ZypperSettings.from_dict(zypper_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


