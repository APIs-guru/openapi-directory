# GoogleCloudOrgpolicyV2CustomConstraint

A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can apply policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_type** | **str** | Allow or deny type. | [optional] 
**condition** | **str** | Org policy condition/expression. For example: &#x60;resource.instanceName.matches(\&quot;[production|test]_.*_(\\d)+\&quot;)&#x60; or, &#x60;resource.management.auto_upgrade &#x3D;&#x3D; true&#x60; The max length of the condition is 1000 characters. | [optional] 
**description** | **str** | Detailed information about this custom policy constraint. The max length of the description is 2000 characters. | [optional] 
**display_name** | **str** | One line display name for the UI. The max length of the display_name is 200 characters. | [optional] 
**method_types** | **List[str]** | All the operations being applied for this constraint. | [optional] 
**name** | **str** | Immutable. Name of the constraint. This is unique within the organization. Format of the name should be * &#x60;organizations/{organization_id}/customConstraints/{custom_constraint_id}&#x60; Example: &#x60;organizations/123/customConstraints/custom.createOnlyE2TypeVms&#x60; The max length is 70 characters and the minimum length is 1. Note that the prefix &#x60;organizations/{organization_id}/customConstraints/&#x60; is not counted. | [optional] 
**resource_types** | **List[str]** | Immutable. The resource instance type on which this policy applies. Format will be of the form : &#x60;/&#x60; Example: * &#x60;compute.googleapis.com/Instance&#x60;. | [optional] 
**update_time** | **str** | Output only. The last time this custom constraint was updated. This represents the last time that the &#x60;CreateCustomConstraint&#x60; or &#x60;UpdateCustomConstraint&#x60; RPC was called | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_orgpolicy_v2_custom_constraint import GoogleCloudOrgpolicyV2CustomConstraint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudOrgpolicyV2CustomConstraint from a JSON string
google_cloud_orgpolicy_v2_custom_constraint_instance = GoogleCloudOrgpolicyV2CustomConstraint.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudOrgpolicyV2CustomConstraint.to_json())

# convert the object into a dict
google_cloud_orgpolicy_v2_custom_constraint_dict = google_cloud_orgpolicy_v2_custom_constraint_instance.to_dict()
# create an instance of GoogleCloudOrgpolicyV2CustomConstraint from a dict
google_cloud_orgpolicy_v2_custom_constraint_from_dict = GoogleCloudOrgpolicyV2CustomConstraint.from_dict(google_cloud_orgpolicy_v2_custom_constraint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


