# GoogleIdentityAccesscontextmanagerV1AccessPolicy

`AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Output only. An opaque identifier for the current version of the &#x60;AccessPolicy&#x60;. This will always be a strongly validated etag, meaning that two Access Polices will be identical if and only if their etags are identical. Clients should not expect this to be in any specific format. | [optional] 
**name** | **str** | Output only. Resource name of the &#x60;AccessPolicy&#x60;. Format: &#x60;accessPolicies/{access_policy}&#x60; | [optional] 
**parent** | **str** | Required. The parent of this &#x60;AccessPolicy&#x60; in the Cloud Resource Hierarchy. Currently immutable once created. Format: &#x60;organizations/{organization_id}&#x60; | [optional] 
**scopes** | **List[str]** | The scopes of a policy define which resources an ACM policy can restrict, and where ACM resources can be referenced. For example, a policy with scopes&#x3D;[\&quot;folders/123\&quot;] has the following behavior: - vpcsc perimeters can only restrict projects within folders/123 - access levels can only be referenced by resources within folders/123. If empty, there are no limitations on which resources can be restricted by an ACM policy, and there are no limitations on where ACM resources can be referenced. Only one policy can include a given scope (attempting to create a second policy which includes \&quot;folders/123\&quot; will result in an error). Currently, scopes cannot be modified after a policy is created. Currently, policies can only have a single scope. Format: list of &#x60;folders/{folder_number}&#x60; or &#x60;projects/{project_number}&#x60; | [optional] 
**title** | **str** | Required. Human readable title. Does not affect behavior. | [optional] 

## Example

```python
from openapi_client.models.google_identity_accesscontextmanager_v1_access_policy import GoogleIdentityAccesscontextmanagerV1AccessPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityAccesscontextmanagerV1AccessPolicy from a JSON string
google_identity_accesscontextmanager_v1_access_policy_instance = GoogleIdentityAccesscontextmanagerV1AccessPolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityAccesscontextmanagerV1AccessPolicy.to_json())

# convert the object into a dict
google_identity_accesscontextmanager_v1_access_policy_dict = google_identity_accesscontextmanager_v1_access_policy_instance.to_dict()
# create an instance of GoogleIdentityAccesscontextmanagerV1AccessPolicy from a dict
google_identity_accesscontextmanager_v1_access_policy_from_dict = GoogleIdentityAccesscontextmanagerV1AccessPolicy.from_dict(google_identity_accesscontextmanager_v1_access_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


