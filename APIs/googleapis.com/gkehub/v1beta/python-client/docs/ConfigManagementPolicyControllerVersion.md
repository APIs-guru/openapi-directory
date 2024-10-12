# ConfigManagementPolicyControllerVersion

The build version of Gatekeeper Policy Controller is using.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | The gatekeeper image tag that is composed of ACM version, git tag, build number. | [optional] 

## Example

```python
from openapi_client.models.config_management_policy_controller_version import ConfigManagementPolicyControllerVersion

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementPolicyControllerVersion from a JSON string
config_management_policy_controller_version_instance = ConfigManagementPolicyControllerVersion.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementPolicyControllerVersion.to_json())

# convert the object into a dict
config_management_policy_controller_version_dict = config_management_policy_controller_version_instance.to_dict()
# create an instance of ConfigManagementPolicyControllerVersion from a dict
config_management_policy_controller_version_from_dict = ConfigManagementPolicyControllerVersion.from_dict(config_management_policy_controller_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


