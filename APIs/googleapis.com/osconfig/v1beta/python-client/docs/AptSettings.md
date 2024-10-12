# AptSettings

Apt patching is completed by executing `apt-get update && apt-get upgrade`. Additional options can be set to control how this is executed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excludes** | **List[str]** | List of packages to exclude from update. These packages will be excluded | [optional] 
**exclusive_packages** | **List[str]** | An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field cannot be specified with any other patch configuration fields. | [optional] 
**type** | **str** | By changing the type to DIST, the patching is performed using &#x60;apt-get dist-upgrade&#x60; instead. | [optional] 

## Example

```python
from openapi_client.models.apt_settings import AptSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AptSettings from a JSON string
apt_settings_instance = AptSettings.from_json(json)
# print the JSON string representation of the object
print(AptSettings.to_json())

# convert the object into a dict
apt_settings_dict = apt_settings_instance.to_dict()
# create an instance of AptSettings from a dict
apt_settings_from_dict = AptSettings.from_dict(apt_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


