# DistributionGroupWithUsersResponseAadGroupsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_group_id** | **str** | The AAD unique id (UUID) of the AAD group. | [optional] 
**display_name** | **str** | The display name of the AAD group | [optional] 
**id** | **str** | The internal unique id (UUID) of the AAD group. | [optional] 

## Example

```python
from openapi_client.models.distribution_group_with_users_response_aad_groups_inner import DistributionGroupWithUsersResponseAadGroupsInner

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupWithUsersResponseAadGroupsInner from a JSON string
distribution_group_with_users_response_aad_groups_inner_instance = DistributionGroupWithUsersResponseAadGroupsInner.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupWithUsersResponseAadGroupsInner.to_json())

# convert the object into a dict
distribution_group_with_users_response_aad_groups_inner_dict = distribution_group_with_users_response_aad_groups_inner_instance.to_dict()
# create an instance of DistributionGroupWithUsersResponseAadGroupsInner from a dict
distribution_group_with_users_response_aad_groups_inner_from_dict = DistributionGroupWithUsersResponseAadGroupsInner.from_dict(distribution_group_with_users_response_aad_groups_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


