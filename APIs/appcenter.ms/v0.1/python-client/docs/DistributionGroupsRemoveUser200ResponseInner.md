# DistributionGroupsRemoveUser200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code of the result | [optional] 
**message** | **int** | The message of the result | [optional] 
**status** | **int** | The status code of the result | 
**user_email** | **str** | The email of the user | [optional] 

## Example

```python
from openapi_client.models.distribution_groups_remove_user200_response_inner import DistributionGroupsRemoveUser200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupsRemoveUser200ResponseInner from a JSON string
distribution_groups_remove_user200_response_inner_instance = DistributionGroupsRemoveUser200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupsRemoveUser200ResponseInner.to_json())

# convert the object into a dict
distribution_groups_remove_user200_response_inner_dict = distribution_groups_remove_user200_response_inner_instance.to_dict()
# create an instance of DistributionGroupsRemoveUser200ResponseInner from a dict
distribution_groups_remove_user200_response_inner_from_dict = DistributionGroupsRemoveUser200ResponseInner.from_dict(distribution_groups_remove_user200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


