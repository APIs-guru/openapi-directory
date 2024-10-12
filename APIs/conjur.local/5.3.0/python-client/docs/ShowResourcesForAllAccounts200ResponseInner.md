# ShowResourcesForAllAccounts200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **List[str]** |  | [optional] 
**created_at** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**owner** | **str** |  | [optional] 
**permissions** | [**List[ShowResourcesForAllAccounts200ResponseInnerPermissionsInner]**](ShowResourcesForAllAccounts200ResponseInnerPermissionsInner.md) |  | [optional] 
**policy** | **str** |  | [optional] 
**policy_versions** | [**List[ShowResourcesForAllAccounts200ResponseInnerPolicyVersionsInner]**](ShowResourcesForAllAccounts200ResponseInnerPolicyVersionsInner.md) |  | [optional] 
**restricted_to** | **List[str]** |  | [optional] 
**secrets** | [**List[ShowResourcesForAllAccounts200ResponseInnerSecretsInner]**](ShowResourcesForAllAccounts200ResponseInnerSecretsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.show_resources_for_all_accounts200_response_inner import ShowResourcesForAllAccounts200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of ShowResourcesForAllAccounts200ResponseInner from a JSON string
show_resources_for_all_accounts200_response_inner_instance = ShowResourcesForAllAccounts200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(ShowResourcesForAllAccounts200ResponseInner.to_json())

# convert the object into a dict
show_resources_for_all_accounts200_response_inner_dict = show_resources_for_all_accounts200_response_inner_instance.to_dict()
# create an instance of ShowResourcesForAllAccounts200ResponseInner from a dict
show_resources_for_all_accounts200_response_inner_from_dict = ShowResourcesForAllAccounts200ResponseInner.from_dict(show_resources_for_all_accounts200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


