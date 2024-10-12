# GoogleCloudAssetV1CustomConstraint

The definition of a custom constraint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_type** | **str** | Allow or deny type. | [optional] 
**condition** | **str** | Organization Policy condition/expression. For example: &#x60;resource.instanceName.matches(\&quot;[production|test]_.*_(\\d)+\&quot;)&#39;&#x60; or, &#x60;resource.management.auto_upgrade &#x3D;&#x3D; true&#x60; | [optional] 
**description** | **str** | Detailed information about this custom policy constraint. | [optional] 
**display_name** | **str** | One line display name for the UI. | [optional] 
**method_types** | **List[str]** | All the operations being applied for this constraint. | [optional] 
**name** | **str** | Name of the constraint. This is unique within the organization. Format of the name should be * &#x60;organizations/{organization_id}/customConstraints/{custom_constraint_id}&#x60; Example : \&quot;organizations/123/customConstraints/custom.createOnlyE2TypeVms\&quot; | [optional] 
**resource_types** | **List[str]** | The Resource Instance type on which this policy applies to. Format will be of the form : \&quot;/\&quot; Example: * &#x60;compute.googleapis.com/Instance&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1_custom_constraint import GoogleCloudAssetV1CustomConstraint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1CustomConstraint from a JSON string
google_cloud_asset_v1_custom_constraint_instance = GoogleCloudAssetV1CustomConstraint.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1CustomConstraint.to_json())

# convert the object into a dict
google_cloud_asset_v1_custom_constraint_dict = google_cloud_asset_v1_custom_constraint_instance.to_dict()
# create an instance of GoogleCloudAssetV1CustomConstraint from a dict
google_cloud_asset_v1_custom_constraint_from_dict = GoogleCloudAssetV1CustomConstraint.from_dict(google_cloud_asset_v1_custom_constraint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


