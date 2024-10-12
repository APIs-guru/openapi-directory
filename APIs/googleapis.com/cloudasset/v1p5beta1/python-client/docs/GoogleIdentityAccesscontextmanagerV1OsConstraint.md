# GoogleIdentityAccesscontextmanagerV1OsConstraint

A restriction on the OS type and version of devices making requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minimum_version** | **str** | The minimum allowed OS version. If not set, any version of this OS satisfies the constraint. Format: &#x60;\&quot;major.minor.patch\&quot;&#x60;. Examples: &#x60;\&quot;10.5.301\&quot;&#x60;, &#x60;\&quot;9.2.1\&quot;&#x60;. | [optional] 
**os_type** | **str** | Required. The allowed OS type. | [optional] 
**require_verified_chrome_os** | **bool** | Only allows requests from devices with a verified Chrome OS. Verifications includes requirements that the device is enterprise-managed, conformant to domain policies, and the caller has permission to call the API targeted by the request. | [optional] 

## Example

```python
from openapi_client.models.google_identity_accesscontextmanager_v1_os_constraint import GoogleIdentityAccesscontextmanagerV1OsConstraint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityAccesscontextmanagerV1OsConstraint from a JSON string
google_identity_accesscontextmanager_v1_os_constraint_instance = GoogleIdentityAccesscontextmanagerV1OsConstraint.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityAccesscontextmanagerV1OsConstraint.to_json())

# convert the object into a dict
google_identity_accesscontextmanager_v1_os_constraint_dict = google_identity_accesscontextmanager_v1_os_constraint_instance.to_dict()
# create an instance of GoogleIdentityAccesscontextmanagerV1OsConstraint from a dict
google_identity_accesscontextmanager_v1_os_constraint_from_dict = GoogleIdentityAccesscontextmanagerV1OsConstraint.from_dict(google_identity_accesscontextmanager_v1_os_constraint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


