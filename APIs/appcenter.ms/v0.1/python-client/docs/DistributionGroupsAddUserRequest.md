# DistributionGroupsAddUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_emails** | **List[str]** | The list of emails of the users | [optional] 

## Example

```python
from openapi_client.models.distribution_groups_add_user_request import DistributionGroupsAddUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupsAddUserRequest from a JSON string
distribution_groups_add_user_request_instance = DistributionGroupsAddUserRequest.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupsAddUserRequest.to_json())

# convert the object into a dict
distribution_groups_add_user_request_dict = distribution_groups_add_user_request_instance.to_dict()
# create an instance of DistributionGroupsAddUserRequest from a dict
distribution_groups_add_user_request_from_dict = DistributionGroupsAddUserRequest.from_dict(distribution_groups_add_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


