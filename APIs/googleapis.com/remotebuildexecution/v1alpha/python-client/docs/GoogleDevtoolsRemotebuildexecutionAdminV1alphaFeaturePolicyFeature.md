# GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature

Defines whether a feature can be used or what values are accepted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_values** | **List[str]** | A list of acceptable values. Only effective when the policy is &#x60;RESTRICTED&#x60;. | [optional] 
**policy** | **str** | The policy of the feature. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_feature_policy_feature import GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_feature_policy_feature_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_feature_policy_feature_dict = google_devtools_remotebuildexecution_admin_v1alpha_feature_policy_feature_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature from a dict
google_devtools_remotebuildexecution_admin_v1alpha_feature_policy_feature_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_feature_policy_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


