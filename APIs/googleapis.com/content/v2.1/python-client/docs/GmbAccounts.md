# GmbAccounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The ID of the Merchant Center account. | [optional] 
**gmb_accounts** | [**List[GmbAccountsGmbAccount]**](GmbAccountsGmbAccount.md) | A list of Business Profiles which are available to the merchant. | [optional] 

## Example

```python
from openapi_client.models.gmb_accounts import GmbAccounts

# TODO update the JSON string below
json = "{}"
# create an instance of GmbAccounts from a JSON string
gmb_accounts_instance = GmbAccounts.from_json(json)
# print the JSON string representation of the object
print(GmbAccounts.to_json())

# convert the object into a dict
gmb_accounts_dict = gmb_accounts_instance.to_dict()
# create an instance of GmbAccounts from a dict
gmb_accounts_from_dict = GmbAccounts.from_dict(gmb_accounts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


