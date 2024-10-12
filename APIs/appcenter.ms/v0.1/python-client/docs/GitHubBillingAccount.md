# GitHubBillingAccount

App Center account details from GitHub billing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The account&#39;s display name | 
**id** | **str** | The unique id (UUID) of the account | 
**name** | **str** | The unique name that used to identify the owner | 
**type** | **str** | The owner type. Can either be &#39;org&#39; or &#39;user&#39; | 

## Example

```python
from openapi_client.models.git_hub_billing_account import GitHubBillingAccount

# TODO update the JSON string below
json = "{}"
# create an instance of GitHubBillingAccount from a JSON string
git_hub_billing_account_instance = GitHubBillingAccount.from_json(json)
# print the JSON string representation of the object
print(GitHubBillingAccount.to_json())

# convert the object into a dict
git_hub_billing_account_dict = git_hub_billing_account_instance.to_dict()
# create an instance of GitHubBillingAccount from a dict
git_hub_billing_account_from_dict = GitHubBillingAccount.from_dict(git_hub_billing_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


