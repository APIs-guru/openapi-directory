# PolicyControllerBundleInstallSpec

BundleInstallSpec is the specification configuration for a single managed bundle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exempted_namespaces** | **List[str]** | The set of namespaces to be exempted from the bundle. | [optional] 

## Example

```python
from openapi_client.models.policy_controller_bundle_install_spec import PolicyControllerBundleInstallSpec

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyControllerBundleInstallSpec from a JSON string
policy_controller_bundle_install_spec_instance = PolicyControllerBundleInstallSpec.from_json(json)
# print the JSON string representation of the object
print(PolicyControllerBundleInstallSpec.to_json())

# convert the object into a dict
policy_controller_bundle_install_spec_dict = policy_controller_bundle_install_spec_instance.to_dict()
# create an instance of PolicyControllerBundleInstallSpec from a dict
policy_controller_bundle_install_spec_from_dict = PolicyControllerBundleInstallSpec.from_dict(policy_controller_bundle_install_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


