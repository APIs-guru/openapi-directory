# Admin

An administrator of an Account or a Location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_name** | **str** | The name of the admin. When making the initial invitation, this is the invitee&#39;s email address. On &#x60;GET&#x60; calls, the user&#39;s email address is returned if the invitation is still pending. Otherwise, it contains the user&#39;s first and last names. | [optional] 
**name** | **str** | The resource name. For account admins, this is in the form: &#x60;accounts/{account_id}/admins/{admin_id}&#x60; For location admins, this is in the form: &#x60;accounts/{account_id}/locations/{location_id}/admins/{admin_id}&#x60; | [optional] 
**pending_invitation** | **bool** | Output only. Indicates whether this admin has a pending invitation for the specified resource. | [optional] 
**role** | **str** | Specifies the AdminRole that this admin uses with the specified Account or Location resource. | [optional] 

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


