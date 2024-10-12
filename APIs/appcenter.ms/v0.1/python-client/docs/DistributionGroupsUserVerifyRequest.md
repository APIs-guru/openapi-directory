# DistributionGroupsUserVerifyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distribution_group_ids** | **List[str]** | An array of distribution group ids | 

## Example

```python
from openapi_client.models.distribution_groups_user_verify_request import DistributionGroupsUserVerifyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupsUserVerifyRequest from a JSON string
distribution_groups_user_verify_request_instance = DistributionGroupsUserVerifyRequest.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupsUserVerifyRequest.to_json())

# convert the object into a dict
distribution_groups_user_verify_request_dict = distribution_groups_user_verify_request_instance.to_dict()
# create an instance of DistributionGroupsUserVerifyRequest from a dict
distribution_groups_user_verify_request_from_dict = DistributionGroupsUserVerifyRequest.from_dict(distribution_groups_user_verify_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


