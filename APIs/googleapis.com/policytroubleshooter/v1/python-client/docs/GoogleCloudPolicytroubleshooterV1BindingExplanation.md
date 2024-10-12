# GoogleCloudPolicytroubleshooterV1BindingExplanation

Details about how a binding in a policy affects a principal's ability to use a permission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | Required. Indicates whether _this binding_ provides the specified permission to the specified principal for the specified resource. This field does _not_ indicate whether the principal actually has the permission for the resource. There might be another binding that overrides this binding. To determine whether the principal actually has the permission, use the &#x60;access&#x60; field in the TroubleshootIamPolicyResponse. | [optional] 
**condition** | [**GoogleTypeExpr**](GoogleTypeExpr.md) |  | [optional] 
**memberships** | [**Dict[str, GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership]**](GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership.md) | Indicates whether each principal in the binding includes the principal specified in the request, either directly or indirectly. Each key identifies a principal in the binding, and each value indicates whether the principal in the binding includes the principal in the request. For example, suppose that a binding includes the following principals: * &#x60;user:alice@example.com&#x60; * &#x60;group:product-eng@example.com&#x60; You want to troubleshoot access for &#x60;user:bob@example.com&#x60;. This user is a principal of the group &#x60;group:product-eng@example.com&#x60;. For the first principal in the binding, the key is &#x60;user:alice@example.com&#x60;, and the &#x60;membership&#x60; field in the value is set to &#x60;MEMBERSHIP_NOT_INCLUDED&#x60;. For the second principal in the binding, the key is &#x60;group:product-eng@example.com&#x60;, and the &#x60;membership&#x60; field in the value is set to &#x60;MEMBERSHIP_INCLUDED&#x60;. | [optional] 
**relevance** | **str** | The relevance of this binding to the overall determination for the entire policy. | [optional] 
**role** | **str** | The role that this binding grants. For example, &#x60;roles/compute.serviceAgent&#x60;. For a complete list of predefined IAM roles, as well as the permissions in each role, see https://cloud.google.com/iam/help/roles/reference. | [optional] 
**role_permission** | **str** | Indicates whether the role granted by this binding contains the specified permission. | [optional] 
**role_permission_relevance** | **str** | The relevance of the permission&#39;s existence, or nonexistence, in the role to the overall determination for the entire policy. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policytroubleshooter_v1_binding_explanation import GoogleCloudPolicytroubleshooterV1BindingExplanation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicytroubleshooterV1BindingExplanation from a JSON string
google_cloud_policytroubleshooter_v1_binding_explanation_instance = GoogleCloudPolicytroubleshooterV1BindingExplanation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicytroubleshooterV1BindingExplanation.to_json())

# convert the object into a dict
google_cloud_policytroubleshooter_v1_binding_explanation_dict = google_cloud_policytroubleshooter_v1_binding_explanation_instance.to_dict()
# create an instance of GoogleCloudPolicytroubleshooterV1BindingExplanation from a dict
google_cloud_policytroubleshooter_v1_binding_explanation_from_dict = GoogleCloudPolicytroubleshooterV1BindingExplanation.from_dict(google_cloud_policytroubleshooter_v1_binding_explanation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


