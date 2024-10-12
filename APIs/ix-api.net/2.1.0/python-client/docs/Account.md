# Account


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**billing_information** | [**BillingInformation**](BillingInformation.md) |  | [optional] 
**discoverable** | **bool** | The account will be included for all members of the ix in the list of accounts.  Only &#x60;id&#x60;, &#x60;name&#x60; and &#x60;present_in_metro_area_networks&#x60; are provided to other members. | [optional] [default to False]
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**id** | **str** |  | 
**legal_name** | **str** | Legal name of the organisation. Only required when it&#39;s different from the account name.  | [optional] 
**managing_account** | **str** | The &#x60;id&#x60; of a managing account. Can be used for creating a customer hierachy.  | [optional] 
**metro_area_network_presence** | **List[str]** | Informal list of &#x60;MetroAreaNetwork&#x60; ids, indicating the presence to other accounts. The list is maintained by the account and can be empty.  | 
**name** | **str** | Name of the account, how it gets represented in e.g. a \&quot;customers list\&quot;.  | 
**state** | **str** |  | 
**status** | [**List[Status]**](Status.md) |  | [optional] 

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


