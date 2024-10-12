# Admin

An administrator of an Account or a location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** | Immutable. The name of the Account resource that this Admin refers to. Used when calling locations.admins.create to invite a LocationGroup as an admin. If both this field and &#x60;admin&#x60; are set on &#x60;CREATE&#x60; requests, this field takes precedence and the email address in &#x60;admin&#x60; will be ignored. Format: &#x60;accounts/{account}&#x60;. | [optional] 
**admin** | **str** | Optional. The name of the admin. When making the initial invitation, this is the invitee&#39;s email address. On &#x60;GET&#x60; calls, the user&#39;s email address is returned if the invitation is still pending. Otherwise, it contains the user&#39;s first and last names. This field is only needed to be set during admin creation. | [optional] 
**name** | **str** | Immutable. The resource name. For account admins, this is in the form: &#x60;accounts/{account_id}/admins/{admin_id}&#x60; For location admins, this is in the form: &#x60;locations/{location_id}/admins/{admin_id}&#x60; This field will be ignored if set during admin creation. | [optional] 
**pending_invitation** | **bool** | Output only. Indicates whether this admin has a pending invitation for the specified resource. | [optional] [readonly] 
**role** | **str** | Required. Specifies the role that this admin uses with the specified Account or Location. | [optional] 

## Example

```python
from openapi_client.models.admin import Admin

# TODO update the JSON string below
json = "{}"
# create an instance of Admin from a JSON string
admin_instance = Admin.from_json(json)
# print the JSON string representation of the object
print(Admin.to_json())

# convert the object into a dict
admin_dict = admin_instance.to_dict()
# create an instance of Admin from a dict
admin_from_dict = Admin.from_dict(admin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


