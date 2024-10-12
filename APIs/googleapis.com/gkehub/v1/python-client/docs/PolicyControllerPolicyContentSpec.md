# PolicyControllerPolicyContentSpec

PolicyContentSpec defines the user's desired content configuration on the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundles** | [**Dict[str, PolicyControllerBundleInstallSpec]**](PolicyControllerBundleInstallSpec.md) | map of bundle name to BundleInstallSpec. The bundle name maps to the &#x60;bundleName&#x60; key in the &#x60;policycontroller.gke.io/constraintData&#x60; annotation on a constraint. | [optional] 
**template_library** | [**PolicyControllerTemplateLibraryConfig**](PolicyControllerTemplateLibraryConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_controller_policy_content_spec import PolicyControllerPolicyContentSpec

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyControllerPolicyContentSpec from a JSON string
policy_controller_policy_content_spec_instance = PolicyControllerPolicyContentSpec.from_json(json)
# print the JSON string representation of the object
print(PolicyControllerPolicyContentSpec.to_json())

# convert the object into a dict
policy_controller_policy_content_spec_dict = policy_controller_policy_content_spec_instance.to_dict()
# create an instance of PolicyControllerPolicyContentSpec from a dict
policy_controller_policy_content_spec_from_dict = PolicyControllerPolicyContentSpec.from_dict(policy_controller_policy_content_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


