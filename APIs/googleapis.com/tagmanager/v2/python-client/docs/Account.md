# Account

Represents a Google Tag Manager Account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The Account ID uniquely identifies the GTM Account. | [optional] 
**features** | [**AccountFeatures**](AccountFeatures.md) |  | [optional] 
**fingerprint** | **str** | The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified. | [optional] 
**name** | **str** | Account display name. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update | [optional] 
**path** | **str** | GTM Account&#39;s API relative path. | [optional] 
**share_data** | **bool** | Whether the account shares data anonymously with Google and others. This flag enables benchmarking by sharing your data in an anonymous form. Google will remove all identifiable information about your website, combine the data with hundreds of other anonymous sites and report aggregate trends in the benchmarking service. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update | [optional] 
**tag_manager_url** | **str** | Auto generated link to the tag manager UI | [optional] 

## Example

```python
from openapi_client.models.account import Account

# TODO update the JSON string below
json = "{}"
# create an instance of Account from a JSON string
account_instance = Account.from_json(json)
# print the JSON string representation of the object
print(Account.to_json())

# convert the object into a dict
account_dict = account_instance.to_dict()
# create an instance of Account from a dict
account_from_dict = Account.from_dict(account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


