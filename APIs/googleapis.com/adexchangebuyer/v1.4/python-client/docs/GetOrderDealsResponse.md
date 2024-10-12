# GetOrderDealsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deals** | [**List[MarketplaceDeal]**](MarketplaceDeal.md) | List of deals for the proposal | [optional] 

## Example

```python
from openapi_client.models.get_order_deals_response import GetOrderDealsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrderDealsResponse from a JSON string
get_order_deals_response_instance = GetOrderDealsResponse.from_json(json)
# print the JSON string representation of the object
print(GetOrderDealsResponse.to_json())

# convert the object into a dict
get_order_deals_response_dict = get_order_deals_response_instance.to_dict()
# create an instance of GetOrderDealsResponse from a dict
get_order_deals_response_from_dict = GetOrderDealsResponse.from_dict(get_order_deals_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


