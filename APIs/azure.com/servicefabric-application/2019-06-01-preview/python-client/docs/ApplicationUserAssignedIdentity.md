# ApplicationUserAssignedIdentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The friendly name of user assigned identity. | 
**principal_id** | **str** | The principal id of user assigned identity. | 

## Example

```python
from openapi_client.models.application_user_assigned_identity import ApplicationUserAssignedIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationUserAssignedIdentity from a JSON string
application_user_assigned_identity_instance = ApplicationUserAssignedIdentity.from_json(json)
# print the JSON string representation of the object
print(ApplicationUserAssignedIdentity.to_json())

# convert the object into a dict
application_user_assigned_identity_dict = application_user_assigned_identity_instance.to_dict()
# create an instance of ApplicationUserAssignedIdentity from a dict
application_user_assigned_identity_from_dict = ApplicationUserAssignedIdentity.from_dict(application_user_assigned_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


