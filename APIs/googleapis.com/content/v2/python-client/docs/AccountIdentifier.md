# AccountIdentifier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregator_id** | **str** | The aggregator ID, set for aggregators and subaccounts (in that case, it represents the aggregator of the subaccount). | [optional] 
**merchant_id** | **str** | The merchant account ID, set for individual accounts and subaccounts. | [optional] 

## Example

```python
from openapi_client.models.account_identifier import AccountIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of AccountIdentifier from a JSON string
account_identifier_instance = AccountIdentifier.from_json(json)
# print the JSON string representation of the object
print(AccountIdentifier.to_json())

# convert the object into a dict
account_identifier_dict = account_identifier_instance.to_dict()
# create an instance of AccountIdentifier from a dict
account_identifier_from_dict = AccountIdentifier.from_dict(account_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


