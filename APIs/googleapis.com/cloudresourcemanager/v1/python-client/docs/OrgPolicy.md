# OrgPolicy

Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolean_policy** | [**BooleanPolicy**](BooleanPolicy.md) |  | [optional] 
**constraint** | **str** | The name of the &#x60;Constraint&#x60; the &#x60;Policy&#x60; is configuring, for example, &#x60;constraints/serviceuser.services&#x60;. A [list of available constraints](/resource-manager/docs/organization-policy/org-policy-constraints) is available. Immutable after creation. | [optional] 
**etag** | **bytearray** | An opaque tag indicating the current version of the &#x60;Policy&#x60;, used for concurrency control. When the &#x60;Policy&#x60; is returned from either a &#x60;GetPolicy&#x60; or a &#x60;ListOrgPolicy&#x60; request, this &#x60;etag&#x60; indicates the version of the current &#x60;Policy&#x60; to use when executing a read-modify-write loop. When the &#x60;Policy&#x60; is returned from a &#x60;GetEffectivePolicy&#x60; request, the &#x60;etag&#x60; will be unset. When the &#x60;Policy&#x60; is used in a &#x60;SetOrgPolicy&#x60; method, use the &#x60;etag&#x60; value that was returned from a &#x60;GetOrgPolicy&#x60; request as part of a read-modify-write loop for concurrency control. Not setting the &#x60;etag&#x60;in a &#x60;SetOrgPolicy&#x60; request will result in an unconditional write of the &#x60;Policy&#x60;. | [optional] 
**list_policy** | [**ListPolicy**](ListPolicy.md) |  | [optional] 
**restore_default** | **object** | Ignores policies set above this resource and restores the &#x60;constraint_default&#x60; enforcement behavior of the specific &#x60;Constraint&#x60; at this resource. Suppose that &#x60;constraint_default&#x60; is set to &#x60;ALLOW&#x60; for the &#x60;Constraint&#x60; &#x60;constraints/serviceuser.services&#x60;. Suppose that organization foo.com sets a &#x60;Policy&#x60; at their Organization resource node that restricts the allowed service activations to deny all service activations. They could then set a &#x60;Policy&#x60; with the &#x60;policy_type&#x60; &#x60;restore_default&#x60; on several experimental projects, restoring the &#x60;constraint_default&#x60; enforcement of the &#x60;Constraint&#x60; for only those projects, allowing those projects to have all services activated. | [optional] 
**update_time** | **str** | The time stamp the &#x60;Policy&#x60; was previously updated. This is set by the server, not specified by the caller, and represents the last time a call to &#x60;SetOrgPolicy&#x60; was made for that &#x60;Policy&#x60;. Any value set by the client will be ignored. | [optional] 
**version** | **int** | Version of the &#x60;Policy&#x60;. Default version is 0; | [optional] 

## Example

```python
from openapi_client.models.org_policy import OrgPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of OrgPolicy from a JSON string
org_policy_instance = OrgPolicy.from_json(json)
# print the JSON string representation of the object
print(OrgPolicy.to_json())

# convert the object into a dict
org_policy_dict = org_policy_instance.to_dict()
# create an instance of OrgPolicy from a dict
org_policy_from_dict = OrgPolicy.from_dict(org_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


