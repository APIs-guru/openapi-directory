# DirectDealsList

A direct deals feed lists Direct Deals the Ad Exchange buyer account has access to. This includes direct deals set up for the buyer account as well as its merged stream seats.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direct_deals** | [**List[DirectDeal]**](DirectDeal.md) | A list of direct deals relevant for your account. | [optional] 
**kind** | **str** | Resource type. | [optional] [default to 'adexchangebuyer#directDealsList']

## Example

```python
from openapi_client.models.direct_deals_list import DirectDealsList

# TODO update the JSON string below
json = "{}"
# create an instance of DirectDealsList from a JSON string
direct_deals_list_instance = DirectDealsList.from_json(json)
# print the JSON string representation of the object
print(DirectDealsList.to_json())

# convert the object into a dict
direct_deals_list_dict = direct_deals_list_instance.to_dict()
# create an instance of DirectDealsList from a dict
direct_deals_list_from_dict = DirectDealsList.from_dict(direct_deals_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


