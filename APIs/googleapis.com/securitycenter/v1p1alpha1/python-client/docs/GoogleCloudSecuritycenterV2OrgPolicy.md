# GoogleCloudSecuritycenterV2OrgPolicy

Contains information about the org policies associated with the finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The resource name of the org policy. Example: \&quot;organizations/{organization_id}/policies/{constraint_name}\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_org_policy import GoogleCloudSecuritycenterV2OrgPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2OrgPolicy from a JSON string
google_cloud_securitycenter_v2_org_policy_instance = GoogleCloudSecuritycenterV2OrgPolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2OrgPolicy.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_org_policy_dict = google_cloud_securitycenter_v2_org_policy_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2OrgPolicy from a dict
google_cloud_securitycenter_v2_org_policy_from_dict = GoogleCloudSecuritycenterV2OrgPolicy.from_dict(google_cloud_securitycenter_v2_org_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


