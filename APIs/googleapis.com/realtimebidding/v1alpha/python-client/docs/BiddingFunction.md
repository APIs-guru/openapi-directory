# BiddingFunction

The bidding function to be executed as part of the TURTLEDOVE simulation experiment bidding flow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bidding_function** | **str** | The raw Javascript source code of the bidding function. | [optional] 
**name** | **str** | The name of the bidding function that must follow the pattern: &#x60;bidders/{bidder_account_id}/biddingFunctions/{bidding_function_name}&#x60;. | [optional] 
**state** | **str** | Output only. The state of the bidding function. | [optional] [readonly] 
**type** | **str** | The type of the bidding function to be created. | [optional] 

## Example

```python
from openapi_client.models.bidding_function import BiddingFunction

# TODO update the JSON string below
json = "{}"
# create an instance of BiddingFunction from a JSON string
bidding_function_instance = BiddingFunction.from_json(json)
# print the JSON string representation of the object
print(BiddingFunction.to_json())

# convert the object into a dict
bidding_function_dict = bidding_function_instance.to_dict()
# create an instance of BiddingFunction from a dict
bidding_function_from_dict = BiddingFunction.from_dict(bidding_function_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


