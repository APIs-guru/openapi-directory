# DistributionGroupsListUsers200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_url** | **str** | The avatar URL of the user | [optional] 
**can_change_password** | **bool** | User is required to send an old password in order to change the password. | [optional] 
**display_name** | **str** | The full name of the user. Might for example be first and last name | [optional] 
**email** | **str** | The email address of the user | 
**id** | **str** | The unique id (UUID) of the user | [optional] 
**invite_pending** | **bool** | Whether the has accepted the invite. Available when an invite is pending, and the value will be \&quot;true\&quot;. | [optional] 
**name** | **str** | The unique name that is used to identify the user. | [optional] 

## Example

```python
from openapi_client.models.distribution_groups_list_users200_response_inner import DistributionGroupsListUsers200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupsListUsers200ResponseInner from a JSON string
distribution_groups_list_users200_response_inner_instance = DistributionGroupsListUsers200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupsListUsers200ResponseInner.to_json())

# convert the object into a dict
distribution_groups_list_users200_response_inner_dict = distribution_groups_list_users200_response_inner_instance.to_dict()
# create an instance of DistributionGroupsListUsers200ResponseInner from a dict
distribution_groups_list_users200_response_inner_from_dict = DistributionGroupsListUsers200ResponseInner.from_dict(distribution_groups_list_users200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


