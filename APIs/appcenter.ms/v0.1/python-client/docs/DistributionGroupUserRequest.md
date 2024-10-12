# DistributionGroupUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_emails** | **List[str]** | The list of emails of the users | [optional] 

## Example

```python
from openapi_client.models.distribution_group_user_request import DistributionGroupUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupUserRequest from a JSON string
distribution_group_user_request_instance = DistributionGroupUserRequest.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupUserRequest.to_json())

# convert the object into a dict
distribution_group_user_request_dict = distribution_group_user_request_instance.to_dict()
# create an instance of DistributionGroupUserRequest from a dict
distribution_group_user_request_from_dict = DistributionGroupUserRequest.from_dict(distribution_group_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


