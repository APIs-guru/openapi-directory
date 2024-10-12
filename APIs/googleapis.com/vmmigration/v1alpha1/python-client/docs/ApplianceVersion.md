# ApplianceVersion

Describes an appliance version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**critical** | **bool** | Determine whether it&#39;s critical to upgrade the appliance to this version. | [optional] 
**release_notes_uri** | **str** | Link to a page that contains the version release notes. | [optional] 
**uri** | **str** | A link for downloading the version. | [optional] 
**version** | **str** | The appliance version. | [optional] 

## Example

```python
from openapi_client.models.appliance_version import ApplianceVersion

# TODO update the JSON string below
json = "{}"
# create an instance of ApplianceVersion from a JSON string
appliance_version_instance = ApplianceVersion.from_json(json)
# print the JSON string representation of the object
print(ApplianceVersion.to_json())

# convert the object into a dict
appliance_version_dict = appliance_version_instance.to_dict()
# create an instance of ApplianceVersion from a dict
appliance_version_from_dict = ApplianceVersion.from_dict(appliance_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


