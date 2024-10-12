# GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy

FeaturePolicy defines features allowed to be used on RBE instances, as well as instance-wide behavior changes that take effect without opt-in or opt-out at usage time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_hermeticity** | **str** | Defines the hermeticity policy for actions on this instance. DO NOT USE: Experimental / unlaunched feature. | [optional] 
**action_isolation** | **str** | Defines the isolation policy for actions on this instance. DO NOT USE: Experimental / unlaunched feature. | [optional] 
**container_image_sources** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature.md) |  | [optional] 
**docker_add_capabilities** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature.md) |  | [optional] 
**docker_chroot_path** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature.md) |  | [optional] 
**docker_network** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature.md) |  | [optional] 
**docker_privileged** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature.md) |  | [optional] 
**docker_run_as_container_provided_user** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature.md) |  | [optional] 
**docker_run_as_root** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature.md) |  | [optional] 
**docker_runtime** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature.md) |  | [optional] 
**docker_sibling_containers** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature.md) |  | [optional] 
**docker_ulimits** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature.md) |  | [optional] 
**linux_execution** | **str** | Defines how Linux actions are allowed to execute. DO NOT USE: Experimental / unlaunched feature. | [optional] 
**linux_isolation** | **str** | linux_isolation allows overriding the docker runtime used for containers started on Linux. | [optional] 
**mac_execution** | **str** | Defines how Windows actions are allowed to execute. DO NOT USE: Experimental / unlaunched feature. | [optional] 
**vm_verification** | **str** | Whether to verify CreateBotSession and UpdateBotSession from the bot. | [optional] 
**windows_execution** | **str** | Defines how Windows actions are allowed to execute. DO NOT USE: Experimental / unlaunched feature. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_feature_policy import GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_feature_policy_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_feature_policy_dict = google_devtools_remotebuildexecution_admin_v1alpha_feature_policy_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy from a dict
google_devtools_remotebuildexecution_admin_v1alpha_feature_policy_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_feature_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


