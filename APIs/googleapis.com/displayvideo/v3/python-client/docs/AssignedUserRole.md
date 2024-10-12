# AssignedUserRole

A single assigned user role, which defines a user's authorized interaction with a specified partner or advertiser.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | The ID of the advertiser that the assigend user role applies to. | [optional] 
**assigned_user_role_id** | **str** | Output only. The ID of the assigned user role. | [optional] [readonly] 
**partner_id** | **str** | The ID of the partner that the assigned user role applies to. | [optional] 
**user_role** | **str** | Required. The user role to assign to a user for the entity. | [optional] 

## Example

```python
from openapi_client.models.assigned_user_role import AssignedUserRole

# TODO update the JSON string below
json = "{}"
# create an instance of AssignedUserRole from a JSON string
assigned_user_role_instance = AssignedUserRole.from_json(json)
# print the JSON string representation of the object
print(AssignedUserRole.to_json())

# convert the object into a dict
assigned_user_role_dict = assigned_user_role_instance.to_dict()
# create an instance of AssignedUserRole from a dict
assigned_user_role_from_dict = AssignedUserRole.from_dict(assigned_user_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


