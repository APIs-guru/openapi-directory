# GoogleCloudSecuritycenterV2IamBinding

Represents a particular IAM binding, which captures a member's role addition, removal, or state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The action that was performed on a Binding. | [optional] 
**member** | **str** | A single identity requesting access for a Cloud Platform resource, for example, \&quot;foo@google.com\&quot;. | [optional] 
**role** | **str** | Role that is assigned to \&quot;members\&quot;. For example, \&quot;roles/viewer\&quot;, \&quot;roles/editor\&quot;, or \&quot;roles/owner\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_iam_binding import GoogleCloudSecuritycenterV2IamBinding

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2IamBinding from a JSON string
google_cloud_securitycenter_v2_iam_binding_instance = GoogleCloudSecuritycenterV2IamBinding.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2IamBinding.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_iam_binding_dict = google_cloud_securitycenter_v2_iam_binding_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2IamBinding from a dict
google_cloud_securitycenter_v2_iam_binding_from_dict = GoogleCloudSecuritycenterV2IamBinding.from_dict(google_cloud_securitycenter_v2_iam_binding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


