# DistributionGroupsAddUser200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code of the result | [optional] 
**invite_pending** | **bool** | Whether the has accepted the invite. Available when an invite is pending, and the value will be \&quot;true\&quot;. | [optional] 
**message** | **str** | The message of the result | [optional] 
**status** | **int** | The status code of the result | 
**user_email** | **str** | The email of the user | [optional] 

## Example

```python
from openapi_client.models.distribution_groups_add_user200_response_inner import DistributionGroupsAddUser200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupsAddUser200ResponseInner from a JSON string
distribution_groups_add_user200_response_inner_instance = DistributionGroupsAddUser200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupsAddUser200ResponseInner.to_json())

# convert the object into a dict
distribution_groups_add_user200_response_inner_dict = distribution_groups_add_user200_response_inner_instance.to_dict()
# create an instance of DistributionGroupsAddUser200ResponseInner from a dict
distribution_groups_add_user200_response_inner_from_dict = DistributionGroupsAddUser200ResponseInner.from_dict(distribution_groups_add_user200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


