# AppDistributionGroupUsersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**member_ids** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.app_distribution_group_users_request import AppDistributionGroupUsersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppDistributionGroupUsersRequest from a JSON string
app_distribution_group_users_request_instance = AppDistributionGroupUsersRequest.from_json(json)
# print the JSON string representation of the object
print(AppDistributionGroupUsersRequest.to_json())

# convert the object into a dict
app_distribution_group_users_request_dict = app_distribution_group_users_request_instance.to_dict()
# create an instance of AppDistributionGroupUsersRequest from a dict
app_distribution_group_users_request_from_dict = AppDistributionGroupUsersRequest.from_dict(app_distribution_group_users_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


