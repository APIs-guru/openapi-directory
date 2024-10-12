# GoogleIdentityAccesscontextmanagerV1AccessPolicy

`AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Output only. An opaque identifier for the current version of the &#x60;AccessPolicy&#x60;. This will always be a strongly validated etag, meaning that two Access Polices will be identical if and only if their etags are identical. Clients should not expect this to be in any specific format. | [optional] 
**name** | **str** | Output only. Resource name of the &#x60;AccessPolicy&#x60;. Format: &#x60;accessPolicies/{access_policy}&#x60; | [optional] 
**parent** | **str** | Required. The parent of this &#x60;AccessPolicy&#x60; in the Cloud Resource Hierarchy. Currently immutable once created. Format: &#x60;organizations/{organization_id}&#x60; | [optional] 
**scopes** | **List[str]** | The scopes of the AccessPolicy. Scopes define which resources a policy can restrict and where its resources can be referenced. For example, policy A with &#x60;scopes&#x3D;[\&quot;folders/123\&quot;]&#x60; has the following behavior: - ServicePerimeter can only restrict projects within &#x60;folders/123&#x60;. - ServicePerimeter within policy A can only reference access levels defined within policy A. - Only one policy can include a given scope; thus, attempting to create a second policy which includes &#x60;folders/123&#x60; will result in an error. If no scopes are provided, then any resource within the organization can be restricted. Scopes cannot be modified after a policy is created. Policies can only have a single scope. Format: list of &#x60;folders/{folder_number}&#x60; or &#x60;projects/{project_number}&#x60; | [optional] 
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


