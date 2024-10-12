# DistributionGroupWithUsersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_groups** | [**List[DistributionGroupWithUsersResponseAadGroupsInner]**](DistributionGroupWithUsersResponseAadGroupsInner.md) | The distribution group aad groups | [optional] 
**id** | **str** | The unique ID of the distribution group | 
**is_public** | **bool** | Whether the distribution group is public | [optional] 
**name** | **str** | The name of the distribution group used in URLs | 
**notified_user_count** | **float** | The count of non-pending users in the distribution group who will be notified by new releases | 
**total_groups_count** | **float** | The count of aad groups in the distribution group | [optional] 
**total_user_count** | **float** | The count of users in the distribution group | 
**users** | [**List[DistributionGroupsListUsers200ResponseInner]**](DistributionGroupsListUsers200ResponseInner.md) | The distribution group users | 

## Example

```python
from openapi_client.models.distribution_group_with_users_response import DistributionGroupWithUsersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupWithUsersResponse from a JSON string
distribution_group_with_users_response_instance = DistributionGroupWithUsersResponse.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupWithUsersResponse.to_json())

# convert the object into a dict
distribution_group_with_users_response_dict = distribution_group_with_users_response_instance.to_dict()
# create an instance of DistributionGroupWithUsersResponse from a dict
distribution_group_with_users_response_from_dict = DistributionGroupWithUsersResponse.from_dict(distribution_group_with_users_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


