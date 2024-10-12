# GoogleIdentityStsV1AccessBoundaryRule

An access boundary rule defines an upper bound of IAM permissions on a single resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_condition** | [**GoogleTypeExpr**](GoogleTypeExpr.md) |  | [optional] 
**available_permissions** | **List[str]** | A list of permissions that may be allowed for use on the specified resource. The only supported values in the list are IAM roles, following the format of google.iam.v1.Binding.role. Example value: &#x60;inRole:roles/logging.viewer&#x60; for predefined roles and &#x60;inRole:organizations/{ORGANIZATION_ID}/roles/logging.viewer&#x60; for custom roles. | [optional] 
**available_resource** | **str** | The full resource name of a Google Cloud resource entity. The format definition is at https://cloud.google.com/apis/design/resource_names. Example value: &#x60;//cloudresourcemanager.googleapis.com/projects/my-project&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_identity_sts_v1_access_boundary_rule import GoogleIdentityStsV1AccessBoundaryRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityStsV1AccessBoundaryRule from a JSON string
google_identity_sts_v1_access_boundary_rule_instance = GoogleIdentityStsV1AccessBoundaryRule.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityStsV1AccessBoundaryRule.to_json())

# convert the object into a dict
google_identity_sts_v1_access_boundary_rule_dict = google_identity_sts_v1_access_boundary_rule_instance.to_dict()
# create an instance of GoogleIdentityStsV1AccessBoundaryRule from a dict
google_identity_sts_v1_access_boundary_rule_from_dict = GoogleIdentityStsV1AccessBoundaryRule.from_dict(google_identity_sts_v1_access_boundary_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


