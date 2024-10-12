# DistributionGroupAadGroupsDeleteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_group_id** | **str** | The aad id of the group | [optional] 
**code** | **str** | The code of the result | [optional] 
**message** | **int** | The message of the result | [optional] 
**status** | **int** | The status code of the result | 

## Example

```python
from openapi_client.models.distribution_group_aad_groups_delete_response import DistributionGroupAadGroupsDeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupAadGroupsDeleteResponse from a JSON string
distribution_group_aad_groups_delete_response_instance = DistributionGroupAadGroupsDeleteResponse.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupAadGroupsDeleteResponse.to_json())

# convert the object into a dict
distribution_group_aad_groups_delete_response_dict = distribution_group_aad_groups_delete_response_instance.to_dict()
# create an instance of DistributionGroupAadGroupsDeleteResponse from a dict
distribution_group_aad_groups_delete_response_from_dict = DistributionGroupAadGroupsDeleteResponse.from_dict(distribution_group_aad_groups_delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


