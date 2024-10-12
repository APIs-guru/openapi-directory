# AddMatterPermissionsRequest

Add an account with the permission specified. The role cannot be owner. If an account already has a role in the matter, the existing role is overwritten.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cc_me** | **bool** | Only relevant if **sendEmails** is **true**. To CC the requestor in the email message, set to **true**. To not CC requestor, set to **false**. | [optional] 
**matter_permission** | [**MatterPermission**](MatterPermission.md) |  | [optional] 
**send_emails** | **bool** | To send a notification email to the added account, set to **true**. To not send a notification email, set to **false**. | [optional] 

## Example

```python
from openapi_client.models.add_matter_permissions_request import AddMatterPermissionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddMatterPermissionsRequest from a JSON string
add_matter_permissions_request_instance = AddMatterPermissionsRequest.from_json(json)
# print the JSON string representation of the object
print(AddMatterPermissionsRequest.to_json())

# convert the object into a dict
add_matter_permissions_request_dict = add_matter_permissions_request_instance.to_dict()
# create an instance of AddMatterPermissionsRequest from a dict
add_matter_permissions_request_from_dict = AddMatterPermissionsRequest.from_dict(add_matter_permissions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


