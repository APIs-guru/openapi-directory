# AuctionContext

Output only. The auction type the restriction applies to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auction_types** | **List[str]** | The auction types this restriction applies to. | [optional] 

## Example

```python
from openapi_client.models.auction_context import AuctionContext

# TODO update the JSON string below
json = "{}"
# create an instance of AuctionContext from a JSON string
auction_context_instance = AuctionContext.from_json(json)
# print the JSON string representation of the object
print(AuctionContext.to_json())

# convert the object into a dict
auction_context_dict = auction_context_instance.to_dict()
# create an instance of AuctionContext from a dict
auction_context_from_dict = AuctionContext.from_dict(auction_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


