# AutoInstallPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_install_constraint** | [**List[AutoInstallConstraint]**](AutoInstallConstraint.md) | The constraints for auto-installing the app. You can specify a maximum of one constraint. | [optional] 
**auto_install_mode** | **str** | The auto-install mode. If unset, defaults to \&quot;doNotAutoInstall\&quot;. An app is automatically installed regardless of a set maintenance window. | [optional] 
**auto_install_priority** | **int** | The priority of the install, as an unsigned integer. A lower number means higher priority. | [optional] 
**minimum_version_code** | **int** | The minimum version of the app. If a lower version of the app is installed, then the app will be auto-updated according to the auto-install constraints, instead of waiting for the regular auto-update. You can set a minimum version code for at most 20 apps per device. | [optional] 

## Example

```python
from openapi_client.models.auto_install_policy import AutoInstallPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AutoInstallPolicy from a JSON string
auto_install_policy_instance = AutoInstallPolicy.from_json(json)
# print the JSON string representation of the object
print(AutoInstallPolicy.to_json())

# convert the object into a dict
auto_install_policy_dict = auto_install_policy_instance.to_dict()
# create an instance of AutoInstallPolicy from a dict
auto_install_policy_from_dict = AutoInstallPolicy.from_dict(auto_install_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


