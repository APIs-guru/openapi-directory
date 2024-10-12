# Account

Configuration data for an Ad Exchange buyer account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_pretargeting_to_non_guaranteed_deals** | **bool** | When this is false, bid requests that include a deal ID for a private auction or preferred deal are always sent to your bidder. When true, all active pretargeting configs will be applied to private auctions and preferred deals. Programmatic Guaranteed deals (when enabled) are always sent to your bidder. | [optional] 
**bidder_location** | [**List[AccountBidderLocationInner]**](AccountBidderLocationInner.md) | Your bidder locations that have distinct URLs. | [optional] 
**cookie_matching_nid** | **str** | The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this. | [optional] 
**cookie_matching_url** | **str** | The base URL used in cookie match requests. | [optional] 
**id** | **int** | Account id. | [optional] 
**kind** | **str** | Resource type. | [optional] [default to 'adexchangebuyer#account']
**maximum_active_creatives** | **int** | The maximum number of active creatives that an account can have, where a creative is active if it was inserted or bid with in the last 30 days. Please contact your technical account manager if you need to change this. | [optional] 
**maximum_total_qps** | **int** | The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this. | [optional] 
**number_active_creatives** | **int** | The number of creatives that this account inserted or bid with in the last 30 days. | [optional] 

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


