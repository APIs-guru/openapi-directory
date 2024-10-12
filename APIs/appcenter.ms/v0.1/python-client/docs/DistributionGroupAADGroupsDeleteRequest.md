# DistributionGroupAADGroupsDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_group_ids** | **List[str]** | The list of aad group ids | [optional] 

## Example

```python
from openapi_client.models.distribution_group_aad_groups_delete_request import DistributionGroupAADGroupsDeleteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupAADGroupsDeleteRequest from a JSON string
distribution_group_aad_groups_delete_request_instance = DistributionGroupAADGroupsDeleteRequest.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupAADGroupsDeleteRequest.to_json())

# convert the object into a dict
distribution_group_aad_groups_delete_request_dict = distribution_group_aad_groups_delete_request_instance.to_dict()
# create an instance of DistributionGroupAADGroupsDeleteRequest from a dict
distribution_group_aad_groups_delete_request_from_dict = DistributionGroupAADGroupsDeleteRequest.from_dict(distribution_group_aad_groups_delete_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


