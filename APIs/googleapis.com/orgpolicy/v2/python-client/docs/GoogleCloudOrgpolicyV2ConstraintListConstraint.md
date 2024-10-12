# GoogleCloudOrgpolicyV2ConstraintListConstraint

A constraint that allows or disallows a list of string values, which are configured by an Organization Policy administrator with a policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supports_in** | **bool** | Indicates whether values grouped into categories can be used in &#x60;Policy.allowed_values&#x60; and &#x60;Policy.denied_values&#x60;. For example, &#x60;\&quot;in:Python\&quot;&#x60; would match any value in the &#39;Python&#39; group. | [optional] 
**supports_under** | **bool** | Indicates whether subtrees of the Resource Manager resource hierarchy can be used in &#x60;Policy.allowed_values&#x60; and &#x60;Policy.denied_values&#x60;. For example, &#x60;\&quot;under:folders/123\&quot;&#x60; would match any resource under the &#39;folders/123&#39; folder. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_orgpolicy_v2_constraint_list_constraint import GoogleCloudOrgpolicyV2ConstraintListConstraint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudOrgpolicyV2ConstraintListConstraint from a JSON string
google_cloud_orgpolicy_v2_constraint_list_constraint_instance = GoogleCloudOrgpolicyV2ConstraintListConstraint.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudOrgpolicyV2ConstraintListConstraint.to_json())

# convert the object into a dict
google_cloud_orgpolicy_v2_constraint_list_constraint_dict = google_cloud_orgpolicy_v2_constraint_list_constraint_instance.to_dict()
# create an instance of GoogleCloudOrgpolicyV2ConstraintListConstraint from a dict
google_cloud_orgpolicy_v2_constraint_list_constraint_from_dict = GoogleCloudOrgpolicyV2ConstraintListConstraint.from_dict(google_cloud_orgpolicy_v2_constraint_list_constraint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


