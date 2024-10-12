# GcpUserAccessBinding

Restricts access to Cloud Console and Google Cloud APIs for a set of users using Context-Aware Access.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_levels** | **List[str]** | Optional. Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: \&quot;accessPolicies/9522/accessLevels/device_trusted\&quot; | [optional] 
**dry_run_access_levels** | **List[str]** | Optional. Dry run access level that will be evaluated but will not be enforced. The access denial based on dry run policy will be logged. Only one access level is supported, not multiple. This list must have exactly one element. Example: \&quot;accessPolicies/9522/accessLevels/device_trusted\&quot; | [optional] 
**group_key** | **str** | Required. Immutable. Google Group id whose members are subject to this binding&#39;s restrictions. See \&quot;id\&quot; in the [G Suite Directory API&#39;s Groups resource] (https://developers.google.com/admin-sdk/directory/v1/reference/groups#resource). If a group&#39;s email address/alias is changed, this resource will continue to point at the changed group. This field does not accept group email addresses or aliases. Example: \&quot;01d520gv4vjcrht\&quot; | [optional] 
**name** | **str** | Immutable. Assigned by the server during creation. The last segment has an arbitrary length and has only URI unreserved characters (as defined by [RFC 3986 Section 2.3](https://tools.ietf.org/html/rfc3986#section-2.3)). Should not be specified by the client during creation. Example: \&quot;organizations/256/gcpUserAccessBindings/b3-BhcX_Ud5N\&quot; | [optional] 

## Example

```python
from openapi_client.models.gcp_user_access_binding import GcpUserAccessBinding

# TODO update the JSON string below
json = "{}"
# create an instance of GcpUserAccessBinding from a JSON string
gcp_user_access_binding_instance = GcpUserAccessBinding.from_json(json)
# print the JSON string representation of the object
print(GcpUserAccessBinding.to_json())

# convert the object into a dict
gcp_user_access_binding_dict = gcp_user_access_binding_instance.to_dict()
# create an instance of GcpUserAccessBinding from a dict
gcp_user_access_binding_from_dict = GcpUserAccessBinding.from_dict(gcp_user_access_binding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


