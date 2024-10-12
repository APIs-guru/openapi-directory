# GitHubMarketplacePurchaseAccount

GitHub account information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | **str** | Type of GitHub account | [optional] 
**id** | **int** | Id of GitHub account | [optional] 

## Example

```python
from openapi_client.models.git_hub_marketplace_purchase_account import GitHubMarketplacePurchaseAccount

# TODO update the JSON string below
json = "{}"
# create an instance of GitHubMarketplacePurchaseAccount from a JSON string
git_hub_marketplace_purchase_account_instance = GitHubMarketplacePurchaseAccount.from_json(json)
# print the JSON string representation of the object
print(GitHubMarketplacePurchaseAccount.to_json())

# convert the object into a dict
git_hub_marketplace_purchase_account_dict = git_hub_marketplace_purchase_account_instance.to_dict()
# create an instance of GitHubMarketplacePurchaseAccount from a dict
git_hub_marketplace_purchase_account_from_dict = GitHubMarketplacePurchaseAccount.from_dict(git_hub_marketplace_purchase_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


