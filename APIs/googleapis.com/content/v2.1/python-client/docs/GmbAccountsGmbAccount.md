# GmbAccountsGmbAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email which identifies the Business Profile. | [optional] 
**listing_count** | **str** | Number of listings under this account. | [optional] 
**name** | **str** | The name of the Business Profile. | [optional] 
**type** | **str** | The type of the Business Profile (User or Business). | [optional] 

## Example

```python
from openapi_client.models.gmb_accounts_gmb_account import GmbAccountsGmbAccount

# TODO update the JSON string below
json = "{}"
# create an instance of GmbAccountsGmbAccount from a JSON string
gmb_accounts_gmb_account_instance = GmbAccountsGmbAccount.from_json(json)
# print the JSON string representation of the object
print(GmbAccountsGmbAccount.to_json())

# convert the object into a dict
gmb_accounts_gmb_account_dict = gmb_accounts_gmb_account_instance.to_dict()
# create an instance of GmbAccountsGmbAccount from a dict
gmb_accounts_gmb_account_from_dict = GmbAccountsGmbAccount.from_dict(gmb_accounts_gmb_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


