# GoogleIdentityAccesscontextmanagerV1DevicePolicy

`DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_device_management_levels** | **List[str]** | Allowed device management levels, an empty list allows all management levels. | [optional] 
**allowed_encryption_statuses** | **List[str]** | Allowed encryptions statuses, an empty list allows all statuses. | [optional] 
**os_constraints** | [**List[GoogleIdentityAccesscontextmanagerV1OsConstraint]**](GoogleIdentityAccesscontextmanagerV1OsConstraint.md) | Allowed OS versions, an empty list allows all types and all versions. | [optional] 
**require_admin_approval** | **bool** | Whether the device needs to be approved by the customer admin. | [optional] 
**require_corp_owned** | **bool** | Whether the device needs to be corp owned. | [optional] 
**require_screenlock** | **bool** | Whether or not screenlock is required for the DevicePolicy to be true. Defaults to &#x60;false&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_identity_accesscontextmanager_v1_device_policy import GoogleIdentityAccesscontextmanagerV1DevicePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityAccesscontextmanagerV1DevicePolicy from a JSON string
google_identity_accesscontextmanager_v1_device_policy_instance = GoogleIdentityAccesscontextmanagerV1DevicePolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityAccesscontextmanagerV1DevicePolicy.to_json())

# convert the object into a dict
google_identity_accesscontextmanager_v1_device_policy_dict = google_identity_accesscontextmanager_v1_device_policy_instance.to_dict()
# create an instance of GoogleIdentityAccesscontextmanagerV1DevicePolicy from a dict
google_identity_accesscontextmanager_v1_device_policy_from_dict = GoogleIdentityAccesscontextmanagerV1DevicePolicy.from_dict(google_identity_accesscontextmanager_v1_device_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


