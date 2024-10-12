# GitHubMarketplacePurchase

GitHub Marketplace purchase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**GitHubMarketplacePurchaseAccount**](GitHubMarketplacePurchaseAccount.md) |  | [optional] 
**plan** | [**GitHubMarketplacePurchasePlan**](GitHubMarketplacePurchasePlan.md) |  | [optional] 

## Example

```python
from openapi_client.models.git_hub_marketplace_purchase import GitHubMarketplacePurchase

# TODO update the JSON string below
json = "{}"
# create an instance of GitHubMarketplacePurchase from a JSON string
git_hub_marketplace_purchase_instance = GitHubMarketplacePurchase.from_json(json)
# print the JSON string representation of the object
print(GitHubMarketplacePurchase.to_json())

# convert the object into a dict
git_hub_marketplace_purchase_dict = git_hub_marketplace_purchase_instance.to_dict()
# create an instance of GitHubMarketplacePurchase from a dict
git_hub_marketplace_purchase_from_dict = GitHubMarketplacePurchase.from_dict(git_hub_marketplace_purchase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


